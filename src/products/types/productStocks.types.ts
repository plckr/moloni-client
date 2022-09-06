import { MoloniError } from '../../types'

type ProductStocksRequest = {
  getAll: {
    params: {
      company_id: number
      product_id?: number
      movement_date?: string
      warehouse_id?: number
      qty?: number
      offset?: number
    }
    response: ProductStock[]
  }
  insert: {
    params: ProductStocksInsertParams
    response:
      | {
          valid: 1
          product_stock_id: number
        }
      | MoloniError
  }
  update: {
    params: {
      company_id: number
      product_stock_id: number
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
      product_stock_id: number
    }
    response:
      | {
          valid: 1
        }
      | MoloniError
  }
  moveToWarehouse: {
    params: {
      company_id: number
      product_id: number
      movement_date: string
      qty: number
      from_warehouse_id: number
      to_warehouse_id: number
      notes?: string
    }
    response:
      | {
          valid: 1
        }
      | MoloniError
  }
}

type ProductStock = {
  product_stock_id: number
  product_id: number
  warehouse_id: number
  movement_date: string
  document_id: number
  qty: number
  accumulated: number
  notes: string
  product: {
    product_id: number
    name: string
    reference: string
  }
  document: {
    document_id: number
    document_type_id: number
    document_set_id: number
    document_set_name: string
    number: number
    date: string
    document_type: {
      document_type: number
      saft_code: string
    }
  }[]
}

type ProductStocksInsertParams = {
  company_id: number
  product_id: number
  movement_date: string
  qty: number
  warehouse_id?: number
  notes?: string
}

export type ProductStocksEndpoint = keyof ProductStocksRequest
export type ProductStocksParams<T extends ProductStocksEndpoint> =
  ProductStocksRequest[T]['params']
export type ProductStocksResponse<T extends ProductStocksEndpoint> =
  | ProductStocksRequest[T]['response']
