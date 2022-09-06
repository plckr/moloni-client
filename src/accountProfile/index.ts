import { Base } from '../base'
import {
  UsersEndpoint,
  UsersParams,
  UsersResponse,
} from './types/myProfile.types'

export class AccountProfile extends Base {
  async users<T extends UsersEndpoint>(
    request: T,
    params?: UsersParams<T>
  ): Promise<UsersResponse<T>> {
    return this.request(`/users/${request}/`, params)
  }
}
