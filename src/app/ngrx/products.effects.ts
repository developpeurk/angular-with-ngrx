import {Injectable} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import {
  GetAllProductErrorAction,
  GetAllProductSuccessAction, GetSelectedProductErrorAction,
  GetSelectedProductSuccessAction,
  ProductsActionTypes
} from './products.actions';

@Injectable()
export class ProductsEffects {
  constructor(private effectActions: Actions, private productService: ProductService) {
  }

  getAllProductsEffect: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionTypes.GET_ALL_PRODUCT),
      mergeMap((action) => {
        return this.productService.getProducts()
          .pipe(
            map(products => new GetAllProductSuccessAction(products)),
            catchError((err) => of(new GetAllProductErrorAction(err.message)))
          );
      })
    )
  );

  /* GET SELECTED PRODUCTS */
  getSelectedProductsEffect: Observable<Action> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionTypes.GET_SELECTED_PRODUCT),
      mergeMap((action) => {
        return this.productService.getSelectedProducts()
          .pipe(
            map(products => new GetSelectedProductSuccessAction(products)),
            catchError((err) => of(new GetSelectedProductErrorAction(err.message)))
          );
      })
    )
  );
}
