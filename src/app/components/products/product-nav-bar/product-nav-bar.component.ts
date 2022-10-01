import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ActionEvent, ProductActionsTypes} from "../../../state/product.state";
import {EventDrivenService} from "../../../services/event.driven.service";


@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {

  constructor(private eventDrivenService:EventDrivenService) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_ALL_PRODUCT})
  }

  onGetSelectedProducts() {
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_SELECTED_PRODUCT})
  }

  onGetNewProduct() {
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.NEW_PRODUCT})
  }

  onGetAvailableProducts() {
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_AVAILABLE_PRODUCT})
  }

  onSearch(dataForm: any) {
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.SEARCH_PRODUCT, payload: dataForm})
  }
}
