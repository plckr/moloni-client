import {
  SubscriptionParams,
  SubscriptionResponse,
  SubscriptionEndpoint,
} from './types/subscription.types'
import { Base } from '../base'
import {
  CompanyEndpoint,
  CompanyParams,
  CompanyResponse,
} from './types/company.types'

export class Company extends Base {
  async companies<T extends CompanyEndpoint>(
    request: T,
    params?: CompanyParams<T>
  ): Promise<CompanyResponse<T>> {
    return this.request(`/companies/${request}/`, params)
  }

  async subscription<T extends SubscriptionEndpoint>(
    request: T,
    params?: SubscriptionParams<T>
  ): Promise<SubscriptionResponse<T>> {
    return this.request(`/subscription/${request}/`, params)
  }
}
