import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../model/product/product.model";
import {ActionEvent, ProductActionsTypes} from "../../../../state/product.state";
import {EventDrivenService} from "../../../../services/event.driven.service";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() public productInput!:Product
  constructor(private eventDrivenService:EventDrivenService) { }

  ngOnInit(): void {
  }

  onSelect(product: Product) {
    this.eventDrivenService.publishEvent({type: ProductActionsTypes.SELECT_PRODUCT, payload: product})
  }

  onEdit(product: Product) {
    this.eventDrivenService.publishEvent({type: ProductActionsTypes.EDIT_PRODUCT, payload: product})
  }

  onDelete(product: Product) {
    this.eventDrivenService.publishEvent({type: ProductActionsTypes.DELETE_PRODUCT, payload: product})
  }
}
