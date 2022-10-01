import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../model/product/product.model";
import {ActionEvent} from "../../../../state/product.state";

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

  }

  onEdit(product: Product) {

  }

  onDelete(product: Product) {

  }
}
