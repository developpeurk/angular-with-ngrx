import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {GetAllProductAction, GetSelectedProductAction, SearchProductAction} from '../../../ngrx/products.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  constructor(private store: Store<any>, private router: Router) { }

  ngOnInit(): void {
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
