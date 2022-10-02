import {Action} from '@ngrx/store';
import {Product} from '../model/product.model';

export enum ProductsActionTypes{
  /* GET ALL PRODUCTS */
  GET_ALL_PRODUCT= '[Products] Get All Products',
  GET_ALL_PRODUCT_SUCCESS= '[Products] Get All Products Success',
  GET_ALL_PRODUCT_ERROR= '[Products] Get All Products Error',

  /* GET SELECTED PRODUCTS */
  GET_SELECTED_PRODUCT= '[Products] Get Selected Products',
  GET_SELECTED_PRODUCT_SUCCESS= '[Products] Get Selected Products Success',
  GET_SELECTED_PRODUCT_ERROR= '[Products] Get Selected Products Error',

  /* GET SEARCH PRODUCTS */
  SEARCH_PRODUCT= '[Products] Search Products',
  SEARCH_PRODUCT_SUCCESS= '[Products] Search Products Success',
  SEARCH_PRODUCT_ERROR= '[Product] Search Products Error',

  /* SELECT / UNSELECT PRODUCTS */
  SELECT_PRODUCT= '[Products] Select Products',
  SELECT_PRODUCT_SUCCESS= '[Products] Select Products Success',
  SELECT_PRODUCT_ERROR= '[Product] Select Products Error',

  /* DELETE PRODUCTS */
  DELETE_PRODUCT= '[Product] DELETE Products',
  DELETE_PRODUCT_SUCCESS= '[Product] DELETE Products Success',
  DELETE_PRODUCT_ERROR= '[Product] DELETE Products Error',
}


/* GET ALL PRODUCT ACTION */
export class GetAllProductAction implements Action{
  type: ProductsActionTypes = ProductsActionTypes.GET_ALL_PRODUCT;
  constructor(public payload: any) {
  }
}

export class GetAllProductSuccessAction implements Action {
  type: ProductsActionTypes = ProductsActionTypes.GET_ALL_PRODUCT_SUCCESS;
  constructor(public payload: Product[]) {
  }
}

export class GetAllProductErrorAction implements Action{
  type: ProductsActionTypes = ProductsActionTypes.GET_ALL_PRODUCT_ERROR;
  constructor(public payload: string) {
  }
}

/* GET SELECTED PRODUCT ACTION */
export class GetSelectedProductAction implements Action{
  type: ProductsActionTypes = ProductsActionTypes.GET_SELECTED_PRODUCT;
  constructor(public payload: any) {
  }
}

export class GetSelectedProductSuccessAction implements Action {
  type: ProductsActionTypes = ProductsActionTypes.GET_SELECTED_PRODUCT_SUCCESS;
  constructor(public payload: Product[]) {
  }
}

export class GetSelectedProductErrorAction implements Action{
  type: ProductsActionTypes = ProductsActionTypes.GET_SELECTED_PRODUCT_ERROR;
  constructor(public payload: string) {
  }
}

/* SEARCH PRODUCT ACTION */
export class SearchProductAction implements Action{
  type: ProductsActionTypes = ProductsActionTypes.SEARCH_PRODUCT;
  constructor(public payload: string) {
  }
}

export class SearchProductSuccessAction implements Action {
  type: ProductsActionTypes = ProductsActionTypes.SEARCH_PRODUCT_SUCCESS;
  constructor(public payload: Product[]) {
  }
}

export class SearchProductErrorAction implements Action{
  type: ProductsActionTypes = ProductsActionTypes.SEARCH_PRODUCT_ERROR;
  constructor(public payload: string) {
  }
}

/* SELECT / UNSELECT  PRODUCT ACTION */
export class SelectProductAction implements Action{
  type: ProductsActionTypes = ProductsActionTypes.SELECT_PRODUCT;
  constructor(public payload: Product) {
  }
}


export class SelectProductSuccessAction implements Action {
  type: ProductsActionTypes = ProductsActionTypes.SELECT_PRODUCT_SUCCESS;
  constructor(public payload: Product) {
  }
}

export class SelectProductErrorAction implements Action{
  type: ProductsActionTypes = ProductsActionTypes.SELECT_PRODUCT_ERROR;
  constructor(public payload: string) {
  }
}


/* DELETE PRODUCT ACTION */
export class DeleteProductAction implements Action{
  type: ProductsActionTypes = ProductsActionTypes.DELETE_PRODUCT;
  constructor(public payload: Product) {
  }
}

export class DeleteProductSuccessAction implements Action {
  type: ProductsActionTypes = ProductsActionTypes.DELETE_PRODUCT_SUCCESS;
  constructor(public payload: Product) {
  }
}

export class DeleteProductErrorAction implements Action{
  type: ProductsActionTypes = ProductsActionTypes.DELETE_PRODUCT_ERROR;
  constructor(public payload: string) {
  }
}

export type ProductsAction = GetAllProductAction | GetAllProductSuccessAction |GetAllProductErrorAction |
                             GetSelectedProductAction | GetSelectedProductSuccessAction | GetSelectedProductErrorAction |
                             SearchProductAction | SearchProductSuccessAction | SearchProductErrorAction |
                             SelectProductAction | SelectProductSuccessAction | SelectProductErrorAction |
                             DeleteProductAction | DeleteProductSuccessAction | DeleteProductErrorAction;






