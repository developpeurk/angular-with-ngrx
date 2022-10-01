import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../model/product/product.model";
import {ActionEvent, ProductActionsTypes} from "../../../../state/product.state";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() public productInput!:Product
  @Output() public productEventEmitter:EventEmitter<ActionEvent>=new EventEmitter<ActionEvent>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
     this.productEventEmitter.emit({type: ProductActionsTypes.SELECT_PRODUCT, payload: product})
  }

  onEdit(product: Product) {
    this.productEventEmitter.emit({type: ProductActionsTypes.EDIT_PRODUCT, payload: product})

  }

  onDelete(product: Product) {
    this.productEventEmitter.emit({type: ProductActionsTypes.DELETE_PRODUCT, payload: product})

  }
}
