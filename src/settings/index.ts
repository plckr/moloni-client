import { Base } from '../base'

export class Settings extends Base {
  async bankAccounts(request, params?): Promise<any> {
    return this.request(`/bankAccounts/${request}/`, params)
  }

  async economicActivityClassificationCodes(request, params?): Promise<any> {
    return this.request(
      `/economicActivityClassificationCodes/${request}/`,
      params
    )
  }

  async paymentMethods(request, params?): Promise<any> {
    return this.request(`/paymentMethods/${request}/`, params)
  }

  async maturityDates(request, params?): Promise<any> {
    return this.request(`/maturityDates/${request}/`, params)
  }

  async deliveryMethods(request, params?): Promise<any> {
    return this.request(`/deliveryMethods/${request}/`, params)
  }

  async vehicles(request, params?): Promise<any> {
    return this.request(`/vehicles/${request}/`, params)
  }

  async deductions(request, params?): Promise<any> {
    return this.request(`/deductions/${request}/`, params)
  }

  async taxes(request, params?): Promise<any> {
    return this.request(`/taxes/${request}/`, params)
  }

  async measurementUnits(request, params?): Promise<any> {
    return this.request(`/measurementUnits/${request}/`, params)
  }

  async identificationTemplates(request, params?): Promise<any> {
    return this.request(`/identificationTemplates/${request}/`, params)
  }

  async documentSets(request, params?): Promise<any> {
    return this.request(`/documentSets/${request}/`, params)
  }

  async warehouses(request, params?): Promise<any> {
    return this.request(`/warehouses/${request}/`, params)
  }

  async productProperties(request, params?): Promise<any> {
    return this.request(`/productProperties/${request}/`, params)
  }
}
