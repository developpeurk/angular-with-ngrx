import {Product} from '../model/product.model';
import {ProductsAction, ProductsActionTypes} from './products.actions';
import {Action} from '@ngrx/store';

export enum ProductsStateEnum{
  LOADING= 'Loading',
  LOADED= 'Loaded',
  ERROR= 'Error',
  INITIAL= 'initial',
  NEW= 'New',
  EDIT= 'Edit',
  UPDATED= 'UPDATED',

}

export interface ProductsState{
  products: Product[];
  errorMessage: string;
  dataState: ProductsStateEnum;
  currentProduct: Product | null;
  currentAction: ProductsAction | null;
}

const initState: ProductsState = {
  products: [],
  errorMessage: '',
  dataState: ProductsStateEnum.INITIAL,
  currentProduct: null,
  currentAction: null
};

export function productReducers(state =  initState, action: Action): ProductsState {
  switch (action.type) {
    case ProductsActionTypes.GET_ALL_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: (action as ProductsAction)};
    case ProductsActionTypes.GET_ALL_PRODUCT_SUCCESS:
      // tslint:disable-next-line:max-line-length
      return {...state, dataState: ProductsStateEnum.LOADED, products: (action as ProductsAction).payload, currentAction: (action as ProductsAction) };
    case ProductsActionTypes.GET_ALL_PRODUCT_ERROR:
      // tslint:disable-next-line:max-line-length
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsAction).payload, currentAction: (action as ProductsAction)};

      /* GET SELECTED PRODUCTS */
    case ProductsActionTypes.GET_SELECTED_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: (action as ProductsAction)};
    case ProductsActionTypes.GET_SELECTED_PRODUCT_SUCCESS:
      // tslint:disable-next-line:max-line-length
      return {...state, dataState: ProductsStateEnum.LOADED, products: (action as ProductsAction).payload, currentAction: (action as ProductsAction)};
    case ProductsActionTypes.GET_SELECTED_PRODUCT_ERROR:
      // tslint:disable-next-line:max-line-length
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsAction).payload, currentAction: (action as ProductsAction)};

    /* NEW PRODUCTS */
    case ProductsActionTypes.NEW_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING, currentAction: (action as ProductsAction)};
    case ProductsActionTypes.NEW_PRODUCT_SUCCESS:
      return {...state, dataState: ProductsStateEnum.NEW, currentAction: (action as ProductsAction)};
    case ProductsActionTypes.NEW_PRODUCT_ERROR:
      // tslint:disable-next-line:max-line-length
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsAction).payload, currentAction: (action as ProductsAction)};

    /* EDIT PRODUCTS */
    case ProductsActionTypes.EDIT_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING,  currentAction: (action as ProductsAction)};
    case ProductsActionTypes.EDIT_PRODUCT_SUCCESS:
      // tslint:disable-next-line:max-line-length
      return {...state, dataState: ProductsStateEnum.LOADED, currentProduct: (action as ProductsAction).payload, currentAction: (action as ProductsAction)};
    case ProductsActionTypes.EDIT_PRODUCT_ERROR:
      // tslint:disable-next-line:max-line-length
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsAction).payload, currentAction: (action as ProductsAction)};


    /* UPDATE PRODUCTS */
    case ProductsActionTypes.UPDATE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING,  currentAction: (action as ProductsAction)};
    case ProductsActionTypes.UPDATE_PRODUCT_SUCCESS:
      const updateProduct: Product = (action as ProductsAction).payload;
      const productsListUpdated: Product[] = state.products.map(p => (p.id === updateProduct.id) ? updateProduct : p );
      return {...state, dataState: ProductsStateEnum.UPDATED, products: productsListUpdated, currentAction: (action as ProductsAction)};
    case ProductsActionTypes.UPDATE_PRODUCT_ERROR:
      // tslint:disable-next-line:max-line-length
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsAction).payload, currentAction: (action as ProductsAction)};

    /* SAVE PRODUCTS */
    case ProductsActionTypes.SAVE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING,  currentAction: (action as ProductsAction)};
    case ProductsActionTypes.SAVE_PRODUCT_SUCCESS:
      const prods: Product[] = [...state.products];
      prods.push((action as ProductsAction).payload);
      return {...state, dataState: ProductsStateEnum.LOADED, products: prods, currentAction: (action as ProductsAction)};
    case ProductsActionTypes.SAVE_PRODUCT_ERROR:
      // tslint:disable-next-line:max-line-length
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsAction).payload,  currentAction: (action as ProductsAction)};


    /*  SEARCH PRODUCTS */
    case ProductsActionTypes.SEARCH_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING,  currentAction: (action as ProductsAction)};
    case ProductsActionTypes.SEARCH_PRODUCT_SUCCESS:
      // tslint:disable-next-line:max-line-length
      return {...state, dataState: ProductsStateEnum.LOADED, products: (action as ProductsAction).payload,  currentAction: (action as ProductsAction)};
    case ProductsActionTypes.SEARCH_PRODUCT_ERROR:
      // tslint:disable-next-line:max-line-length
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsAction).payload,  currentAction: (action as ProductsAction)};

    /*  SELECT / UNSELECT PRODUCTS */
    case ProductsActionTypes.SELECT_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING,  currentAction: (action as ProductsAction)};
    case ProductsActionTypes.SELECT_PRODUCT_SUCCESS:
      const product: Product = (action as ProductsAction).payload;
      const listProducts = [...state.products];
      const data: Product[] = listProducts.map(p => (p.id === product.id) ? product : p);
      return {...state, dataState: ProductsStateEnum.LOADED, products : data,  currentAction: (action as ProductsAction)};
    case ProductsActionTypes.SELECT_PRODUCT_ERROR:
      // tslint:disable-next-line:max-line-length
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsAction).payload,  currentAction: (action as ProductsAction)};

    /*  DELETE PRODUCT */
    case ProductsActionTypes.DELETE_PRODUCT:
      return {...state, dataState: ProductsStateEnum.LOADING,  currentAction: (action as ProductsAction)};
    case ProductsActionTypes.DELETE_PRODUCT_SUCCESS:
      const prdct: Product = (action as ProductsAction).payload;
      const index = state.products.indexOf(prdct);
      const productLists = [...state.products];
      productLists.splice(index, 1);
      return {...state, dataState: ProductsStateEnum.LOADED, products : productLists,  currentAction: (action as ProductsAction)};
    case ProductsActionTypes.DELETE_PRODUCT_ERROR:
      // tslint:disable-next-line:max-line-length
      return {...state, dataState: ProductsStateEnum.ERROR, errorMessage: (action as ProductsAction).payload,  currentAction: (action as ProductsAction)};
    default:
      return {...state};
  }

}
