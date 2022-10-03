import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators as v} from '@angular/forms';
import {ProductsState, ProductsStateEnum} from '../../../ngrx/products.reducers';
import {ProductService} from '../../../services/product.service';
import {Store} from '@ngrx/store';
import {NewProductAction, SaveProductAction} from '../../../ngrx/products.actions';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  public productFormGroup: FormGroup | null = null;
  public state: ProductsState | undefined;
  public readonly productStateEnum = ProductsStateEnum;
  public submitted: boolean = false;

  constructor(private fb: FormBuilder, private productService: ProductService, private store: Store<any>) { }

  ngOnInit(): void {
   this.store.dispatch(new NewProductAction({}));
   this.store.subscribe(myStore => {
     this.state = myStore.catalogState;
     if (this.state?.dataState === ProductsStateEnum.NEW){
       this.productFormGroup = this.fb.group({
         name: ['', v.required],
         price: [0, v.required],
         quantity: [0, v.required],
         selected: [true, v.required],
       });
     }
   });
  }

  newProduct(): void {
    this.store.dispatch(new NewProductAction({}));

  }

  onSaveProduct(): void {
    this.submitted = true;
    if (this.productFormGroup?.invalid) { return; }
    this.store.dispatch(new SaveProductAction(this.productFormGroup?.value));
  }
}
