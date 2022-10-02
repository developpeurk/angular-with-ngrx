import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {map, Observable} from 'rxjs';
import {ProductsState, ProductsStateEnum} from '../../ngrx/products.reducers';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productsState$: Observable<ProductsState>| null = null;
  public readonly productsStateEnum = ProductsStateEnum;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
      this.productsState$ = this.store.pipe(
        map((state) => state.catalogState)
      );
  }
}
