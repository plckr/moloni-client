import { Base } from '../base'

export class GlobalData extends Base {
  async countries(request, params?): Promise<any> {
    return this.request(`/countries/${request}/`, params)
  }

  async fiscalZones(request, params?): Promise<any> {
    return this.request(`/fiscalZones/${request}/`, params)
  }

  async languages(request, params?): Promise<any> {
    return this.request(`/languages/${request}/`, params)
  }

  async currencies(request, params?): Promise<any> {
    return this.request(`/currencies/${request}/`, params)
  }

  async documentModels(request, params?): Promise<any> {
    return this.request(`/documentModels/${request}/`, params)
  }

  async taxExemptions(request, params?): Promise<any> {
    return this.request(`/taxExemptions/${request}/`, params)
  }

  async currencyExchange(request, params?): Promise<any> {
    return this.request(`/currencyExchange/${request}/`, params)
  }

  async mBGateways(request, params?): Promise<any> {
    return this.request(`/mBGateways/${request}/`, params)
  }
}
