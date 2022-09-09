import { Base } from '../base'

export class Documents extends Base {
  async documents(request, params?): Promise<any> {
    return this.request(`/documents/${request}/`, params)
  }

  async invoices(request, params?): Promise<any> {
    return this.request(`/invoices/${request}/`, params)
  }

  async receipts(request, params?): Promise<any> {
    return this.request(`/receipts/${request}/`, params)
  }

  async creditNotes(request, params?): Promise<any> {
    return this.request(`/creditNotes/${request}/`, params)
  }

  async debitNotes(request, params?): Promise<any> {
    return this.request(`/debitNotes/${request}/`, params)
  }

  async simplifiedInvoices(request, params?): Promise<any> {
    return this.request(`/simplifiedInvoices/${request}/`, params)
  }

  async deliveryNotes(request, params?): Promise<any> {
    return this.request(`/deliveryNotes/${request}/`, params)
  }

  async billsOfLading(request, params?): Promise<any> {
    return this.request(`/billsOfLading/${request}/`, params)
  }

  async ownAssetsMovementGuides(request, params?): Promise<any> {
    return this.request(`/ownAssetsMovementGuides/${request}/`, params)
  }

  async waybills(request, params?): Promise<any> {
    return this.request(`/waybills/${request}/`, params)
  }

  async customerReturnNotes(request, params?): Promise<any> {
    return this.request(`/customerReturnNotes/${request}/`, params)
  }

  async estimates(request, params?): Promise<any> {
    return this.request(`/estimates/${request}/`, params)
  }

  async internalDocuments(request, params?): Promise<any> {
    return this.request(`/internalDocuments/${request}/`, params)
  }

  async invoiceReceipts(request, params?): Promise<any> {
    return this.request(`/invoiceReceipts/${request}/`, params)
  }

  async paymentReturns(request, params?): Promise<any> {
    return this.request(`/paymentReturns/${request}/`, params)
  }

  async purchaseOrder(request, params?): Promise<any> {
    return this.request(`/purchaseOrder/${request}/`, params)
  }

  async supplierPurchaseOrder(request, params?): Promise<any> {
    return this.request(`/supplierPurchaseOrder/${request}/`, params)
  }

  async supplierInvoices(request, params?): Promise<any> {
    return this.request(`/supplierInvoices/${request}/`, params)
  }

  async supplierSimplifiedInvoices(request, params?): Promise<any> {
    return this.request(`/supplierSimplifiedInvoices/${request}/`, params)
  }

  async supplierCreditNotes(request, params?): Promise<any> {
    return this.request(`/supplierCreditNotes/${request}/`, params)
  }

  async supplierDebitNotes(request, params?): Promise<any> {
    return this.request(`/supplierDebitNotes/${request}/`, params)
  }

  async supplierReturnNotes(request, params?): Promise<any> {
    return this.request(`/supplierReturnNotes/${request}/`, params)
  }

  async supplierReceipts(request, params?): Promise<any> {
    return this.request(`/supplierReceipts/${request}/`, params)
  }

  async supplierWarrantyRequests(request, params?): Promise<any> {
    return this.request(`/supplierWarrantyRequests/${request}/`, params)
  }

  async globalGuides(request, params?): Promise<any> {
    return this.request(`/globalGuides/${request}/`, params)
  }
}
