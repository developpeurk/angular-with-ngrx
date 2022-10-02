import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {GetAllProductAction, GetSelectedProductAction} from '../../../ngrx/products.actions';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  onGetAllProducts(): void {
      this.store.dispatch(new GetAllProductAction({}));
  }

  onGetSelectedProducts(): void {
    this.store.dispatch(new GetSelectedProductAction({}));
  }
}
