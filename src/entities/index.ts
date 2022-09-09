import { Base } from '../base'

export class Entities extends Base {
  async customers(request, params?): Promise<any> {
    return this.request(`/customers/${request}/`, params)
  }

  async customerAlternateAddresses(request, params?): Promise<any> {
    return this.request(`/customerAlternateAddresses/${request}/`, params)
  }

  async suppliers(request, params?): Promise<any> {
    return this.request(`/suppliers/${request}/`, params)
  }

  async salesmen(request, params?): Promise<any> {
    return this.request(`/salesmen/${request}/`, params)
  }
}
