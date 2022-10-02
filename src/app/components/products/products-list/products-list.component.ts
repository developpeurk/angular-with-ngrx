import {Component, Input, OnInit} from '@angular/core';
import {ProductsState} from '../../../ngrx/products.reducers';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() public stateInput: ProductsState | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
