import { MoloniError } from '../../types'

type ProductCategoriesRequest = {
  getAll: {
    params: {
      company_id: number
      parent_id: 0 | number
    }
    response: ProductCategory[]
  }
  insert: {
    params: ProductCategoryInsertParams
    response:
      | {
          valid: 1
          category_id: number
        }
      | MoloniError
  }
  update: {
    params: {
      category_id: number
    } & Partial<ProductCategoryInsertParams>
    response:
      | {
          valid: 1
          category_id: number
        }
      | MoloniError
  }
  delete: {
    params: {
      company_id: number
      category_id: number
    }
    response:
      | {
          valid: 1
        }
      | MoloniError
  }
}

type ProductCategory = {
  category_id: number
  parent_id: number
  name: string
  description: string
  pos_enabled: number
  image: string
  num_categories: number
  num_products: number
}

type ProductCategoryInsertParams = {
  company_id: number
  parent_id: number
  name: string
  description?: string
  pos_enabled?: number
}

export type ProductCategoriesEndpoint = keyof ProductCategoriesRequest
export type ProductCategoriesParams<T extends ProductCategoriesEndpoint> =
  ProductCategoriesRequest[T]['params']
export type ProductCategoriesResponse<T extends ProductCategoriesEndpoint> =
  | ProductCategoriesRequest[T]['response']
