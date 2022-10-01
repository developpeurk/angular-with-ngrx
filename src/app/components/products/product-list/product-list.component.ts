import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from "../../../state/product.state";
import {Product} from "../../../model/product/product.model";
import {EventDrivenService} from "../../../services/event.driven.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() public productsInput$: Observable<AppDataState<Product[]>> | null = null
  readonly DataStateEnum = DataStateEnum;

  constructor() {
  }

  ngOnInit(): void {}
}
