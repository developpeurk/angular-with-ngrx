import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../../model/product.model';
import {DeleteProductAction, SelectProductAction} from '../../../../ngrx/products.actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() public productInput: Product | undefined;
  constructor(private store: Store<any>) { }

  ngOnInit(): void {
  }

  onSelect(productInput: Product): void {
    this.store.dispatch(new SelectProductAction(productInput));
  }

  onDelete(productInput: Product): void {
    this.store.dispatch(new DeleteProductAction(productInput));
  }
}
