import {Product} from '../model/product.model';
import {ProductsAction, ProductsActionTypes} from './products.actions';
import {Action} from '@ngrx/store';

export enum ProductsStateEnum{
  LOADING= 'Loading',
  LOADED= 'Loaded',
  ERROR= 'Error',
  INITIAL= 'initial'
}

export interface ProductsState{
  products: Product[];
  errorMessage: string;
  dataState: ProductsStateEnum;
}

const initState: ProductsState = {
  products: [],
  errorMessage: '',
  dataState: ProductsStateEnum.INITIAL
};

export function productReducers(state =  initState, action: Action): ProductsState {
  switch (action.type) {
    case ProductsActionTypes.GET_ALL_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionTypes.GET_ALL_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (action as ProductsAction).payload};
    case ProductsActionTypes.GET_ALL_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsAction).payload};

      /* GET SELECTED PRODUCTS */
    case ProductsActionTypes.GET_SELECTED_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionTypes.GET_SELECTED_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (action as ProductsAction).payload};
    case ProductsActionTypes.GET_SELECTED_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsAction).payload};

    /*  SEARCH PRODUCTS */
    case ProductsActionTypes.SEARCH_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING};
    case ProductsActionTypes.SEARCH_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.LOADED, products: (action as ProductsAction).payload};
    case ProductsActionTypes.SEARCH_PRODUCT_ERROR:
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsAction).payload};
    default:
      return {...state};
  }

}
