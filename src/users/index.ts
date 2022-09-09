import { Base } from '../base'
import { UsersEndpoint, UsersParams, UsersResponse } from './types/users.types'

export class Users extends Base {
  async users<T extends UsersEndpoint>(
    request: T,
    params?: UsersParams<T>
  ): Promise<UsersResponse<T>> {
    return this.request(`/users/${request}/`, params)
  }
}
