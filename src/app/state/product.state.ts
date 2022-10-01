export enum ProductActionsTypes{
  GET_ALL_PRODUCT= "[Product] Get All products",
  GET_SELECTED_PRODUCT= "[Product] Get Selected products",
  GET_AVAILABLE_PRODUCT= "[Product] Get Available products",
  SEARCH_PRODUCT= "[Product] Search products",
  NEW_PRODUCT= "[Product] New products",
}

export interface ActionEvent{
  type: ProductActionsTypes
  payload?: any
}

export enum DataStateEnum{
  LOADING,
  LOADED,
  ERROR
}

export interface AppDataState<T>{
  dataState?: DataStateEnum
  data?: T
  errorMessage?: string
}
