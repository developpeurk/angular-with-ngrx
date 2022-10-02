import {Injectable} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, Observable, of} from 'rxjs';
import {
  GetAllProductErrorAction,
  GetAllProductSuccessAction, GetSelectedProductErrorAction,
  GetSelectedProductSuccessAction, ProductsAction,
  ProductsActionTypes, SearchProductErrorAction, SearchProductSuccessAction
} from './products.actions';

@Injectable()
export class ProductsEffects {
  constructor(private effectActions: Actions, private productService: ProductService) {
  }

  getAllProductsEffect: Observable<ProductsAction> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionTypes.GET_ALL_PRODUCT),
      mergeMap((action: ProductsAction) => {
        return this.productService.getProducts()
          .pipe(
            map(products => new GetAllProductSuccessAction(products)),
            catchError((err) => of(new GetAllProductErrorAction(err.message)))
          );
      })
    )
  );

  /* GET SELECTED PRODUCTS */
  getSelectedProductsEffect: Observable<ProductsAction> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionTypes.GET_SELECTED_PRODUCT),
      mergeMap((action: ProductsAction) => {
        return this.productService.getSelectedProducts()
          .pipe(
            map(products => new GetSelectedProductSuccessAction(products)),
            catchError((err) => of(new GetSelectedProductErrorAction(err.message)))
          );
      })
    )
  );

  /*  SEARCH PRODUCTS */
  SearchProductsEffect: Observable<ProductsAction> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionTypes.SEARCH_PRODUCT),
      mergeMap((action: ProductsAction) => {
        return this.productService.searchProducts(action.payload)
          .pipe(
            map(products => new SearchProductSuccessAction(products)),
            catchError((err) => of(new SearchProductErrorAction(err.message)))
          );
      })
    )
  );
}
