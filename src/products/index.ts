import { Base } from '../base'
import {
  PriceClassesEndpoint,
  PriceClassesParams,
  PriceClassesResponse,
} from './types/priceClasses.types'
import {
  ProductCategoriesEndpoint,
  ProductCategoriesParams,
  ProductCategoriesResponse,
} from './types/productCategories.types'
import {
  ProductsEndpoint,
  ProductsParams,
  ProductsResponse,
} from './types/products.types'
import {
  ProductStocksEndpoint,
  ProductStocksParams,
  ProductStocksResponse,
} from './types/productStocks.types'

export class Products extends Base {
  async products<T extends ProductsEndpoint>(
    request: T,
    params?: ProductsParams<T>
  ): Promise<ProductsResponse<T>> {
    return this.request(`/products/${request}/`, params)
  }

  async productCategories<T extends ProductCategoriesEndpoint>(
    request: T,
    params?: ProductCategoriesParams<T>
  ): Promise<ProductCategoriesResponse<T>> {
    return this.request(`/productCategories/${request}/`, params)
  }

  async productStocks<T extends ProductStocksEndpoint>(
    request: T,
    params?: ProductStocksParams<T>
  ): Promise<ProductStocksResponse<T>> {
    return this.request(`/productStocks/${request}/`, params)
  }

  async priceClasses<T extends PriceClassesEndpoint>(
    request: T,
    params?: PriceClassesParams<T>
  ): Promise<PriceClassesResponse<T>> {
    return this.request(`/PriceClasses/${request}/`, params)
  }
}
