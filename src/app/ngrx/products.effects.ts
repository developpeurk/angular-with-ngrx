import {Injectable} from '@angular/core';
import {ProductService} from '../services/product.service';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, mergeMap, Observable, of} from 'rxjs';
import {
  DeleteProductErrorAction,
  DeleteProductSuccessAction, EditProductErrorAction, EditProductSuccessAction,
  GetAllProductErrorAction,
  GetAllProductSuccessAction,
  GetSelectedProductErrorAction,
  GetSelectedProductSuccessAction,
  NewProductSuccessAction,
  ProductsAction,
  ProductsActionTypes, SaveProductErrorAction,
  SaveProductSuccessAction,
  SearchProductErrorAction,
  SearchProductSuccessAction,
  SelectProductErrorAction,
  SelectProductSuccessAction, UpdateProductErrorAction, UpdateProductSuccessAction
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

  /* NEW  PRODUCTS */
  NewProductsEffect: Observable<ProductsAction> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionTypes.NEW_PRODUCT),
      map(() =>  new NewProductSuccessAction({}))
    )
  );

  /* SAVE PRODUCT */
  SaveProductsEffect: Observable<ProductsAction> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionTypes.SAVE_PRODUCT),
      mergeMap((action: ProductsAction) => {
        return this.productService.save(action.payload)
          .pipe(
            map((product) => new SaveProductSuccessAction(product)),
            catchError((err) => of(new SaveProductErrorAction(err.message)))
          );
      })
    )
  );

  /* EDIT PRODUCT */
  EditProductsEffect: Observable<ProductsAction> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionTypes.EDIT_PRODUCT),
      mergeMap((action: ProductsAction) => {
        return this.productService.getProductById(action.payload)
          .pipe(
            map((product) => new EditProductSuccessAction(product)),
            catchError((err) => of(new EditProductErrorAction(err.message)))
          );
      })
    )
  );

  /* UPDATE PRODUCT */
  UpdateProductsEffect: Observable<ProductsAction> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionTypes.UPDATE_PRODUCT),
      mergeMap((action: ProductsAction) => {
        return this.productService.update(action.payload)
          .pipe(
            map((product) => new UpdateProductSuccessAction(product)),
            catchError((err) => of(new UpdateProductErrorAction(err.message)))
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

  /*  SELECT / UNSELECT PRODUCTS */
  SelectProductsEffect: Observable<ProductsAction> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionTypes.SELECT_PRODUCT),
      mergeMap((action: ProductsAction) => {
        return this.productService.setSelected(action.payload)
          .pipe(
            map(product => new SelectProductSuccessAction(product)),
            catchError((err) => of(new SelectProductErrorAction(err.message)))
          );
      })
    )
  );

  /* DELETE PRODUCTS */
  DeleteProductsEffect: Observable<ProductsAction> = createEffect(
    () => this.effectActions.pipe(
      ofType(ProductsActionTypes.DELETE_PRODUCT),
      mergeMap((action: ProductsAction) => {
        return this.productService.delete(action.payload.id)
          .pipe(
            map(() => new DeleteProductSuccessAction(action.payload)),
            catchError((err) => of(new DeleteProductErrorAction(err.message)))
          );
      })
    )
  );

}
