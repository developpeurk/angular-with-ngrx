import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {GetAllProductAction, GetSelectedProductAction, ProductsActionTypes, SearchProductAction} from '../../../ngrx/products.actions';
import {Router} from '@angular/router';
import {ProductsState} from '../../../ngrx/products.reducers';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {
  public state!: ProductsState;
  public readonly productsActions =  ProductsActionTypes;
  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit(): void {
    this.store.subscribe(myStore => {
      this.state = myStore.catalogState;
    });
  }

  onGetAllProducts(): void {
      this.store.dispatch(new GetAllProductAction({}));
  }

  onGetSelectedProducts(): void {
    this.store.dispatch(new GetSelectedProductAction({}));
  }

  onSearch(dataForm: any): void {
      this.store.dispatch(new SearchProductAction(dataForm.keyword));
  }

  onNewProduct(): void {
        this.router.navigateByUrl('/newProduct');
  }
}
