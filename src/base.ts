import fetch from 'isomorphic-unfetch'
import * as qs from 'querystringify'
import { AuthResponse, ErrorResponse } from 'types'

const apiBaseUrl = 'https://api.moloni.pt'
const sandboxUrl = `${apiBaseUrl}/sandbox`
const apiUrl = `${apiBaseUrl}/v1`

type InitConfig = {
  clientId: string
  clientSecret: string
  username: string
  password: string
  sandbox?: boolean
}

export abstract class Base {
  private config: InitConfig
  private companyId?: number
  private apiUrl: string
  private credentials?: AuthResponse

  constructor(config: InitConfig) {
    this.config = config
    this.apiUrl = !!config.sandbox ? sandboxUrl : apiUrl
  }

  public setCompanyId(id: number) {
    this.companyId = id
    return this
  }

  private get expiresIn() {
    const secondsMargin = 10
    if (!this.credentials?.expires_in) return null
    return new Date(
      Date.now() + (this.credentials.expires_in - secondsMargin) * 1000
    )
  }

  protected async request<T>(
    endpoint: string,
    params?: Record<string, any>
  ): Promise<T> {
    if (
      !this.credentials ||
      !this.credentials.access_token ||
      this.expiresIn < new Date()
    ) {
      await this.authenticate()
    }

    const stringifiedParams = qs.stringify(
      { access_token: this.credentials.access_token },
      '?'
    )
    const url = this.apiUrl + endpoint + stringifiedParams
    const body = qs.stringify({ company_id: this.companyId, ...params })

    const config: RequestInit = {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(body).toString(),
      },
    }

    try {
      const res = await fetch(url, config)
      if (!res.ok) {
        throw new Error(res.statusText)
      }
      const data = await res.json()
      return data
    } catch (e) {
      throw new Error(e)
    }
  }

  public async authenticate() {
    const params = {
      grant_type: 'password',
      client_id: this.config.clientId,
      client_secret: this.config.clientSecret,
      username: this.config.username,
      password: this.config.password,
    }

    const stringifiedParams = qs.stringify(params, '?')

    const url = `${this.apiUrl}/grant${stringifiedParams}`

    const config: RequestInit = {
      method: 'GET',
      headers: {
        Accept: '*/*',
        Connection: 'keep-alive',
      },
    }

    try {
      const res = await fetch(url, config)
      if (!res.ok) {
        const err = (await res.json()) as ErrorResponse
        console.error(err)
        return err
      }

      const credentials = (await res.json()) as AuthResponse
      this.credentials = credentials
      return credentials
    } catch (e) {
      throw new Error(e)
    }
  }
}
