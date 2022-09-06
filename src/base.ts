import fetch from 'isomorphic-unfetch'
import * as qs from 'querystringify'
import { AuthResponse, ErrorResponse } from './types'

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
  private companyId?: number
  private credentials?: AuthResponse
  private credentialsExpiresAt?: Date

  constructor(private config: InitConfig) {}

  public setCompanyId(id: number) {
    this.companyId = id
    return this
  }

  private get apiUrl() {
    return !!this.config.sandbox ? sandboxUrl : apiUrl
  }

  protected async request<T>(
    endpoint: string,
    params?: Record<string, any>
  ): Promise<T> {
    if (
      !this.credentials?.access_token ||
      this.credentialsExpiresAt < new Date()
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

      const secondsMargin = 10
      this.credentialsExpiresAt = new Date(
        Date.now() + (credentials.expires_in - secondsMargin) * 1000
      )

      return credentials
    } catch (e) {
      throw new Error(e)
    }
  }
}
