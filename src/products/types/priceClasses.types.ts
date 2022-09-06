import { MoloniError } from '../../types'

type PriceClassesRequest = {
  getAll: {
    params: {
      company_id: number
    }
    response: PriceClass[]
  }
  insert: {
    params: ProductStocksInsertParams
    response:
      | {
          valid: 1
          price_class_id: number
        }
      | MoloniError
  }
  update: {
    params: {
      company_id: number
      price_class_id: number
    } & Partial<ProductStocksInsertParams>
    response:
      | {
          valid: 1
          product_stock_id: number
        }
      | MoloniError
  }
  delete: {
    params: {
      company_id: number
      price_class_id: number
    }
    response:
      | {
          valid: 1
        }
      | MoloniError
  }
}

type PriceClass = {
  price_class_id: number
  title: string
}

type ProductStocksInsertParams = {
  company_id: number
  title: string
}

export type PriceClassesEndpoint = keyof PriceClassesRequest
export type PriceClassesParams<T extends PriceClassesEndpoint> =
  PriceClassesRequest[T]['params']
export type PriceClassesResponse<T extends PriceClassesEndpoint> =
  | PriceClassesRequest[T]['response']
