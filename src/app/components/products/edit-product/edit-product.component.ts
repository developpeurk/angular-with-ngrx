import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {EditProductAction, UpdateProductAction, UpdateProductSuccessAction} from '../../../ngrx/products.actions';
import {ProductsState, ProductsStateEnum} from '../../../ngrx/products.reducers';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  public formBuilt = false;
  public productId: number | undefined;
  public state: ProductsState | null = null;
  public productFormGroup: FormGroup | null = null;
  public readonly productStateEnum = ProductsStateEnum;
  public submitted = false;
  constructor(private fb: FormBuilder, private activatedRoute: ActivatedRoute, private store: Store<any>, private router: Router) {
    this.productId = this.activatedRoute.snapshot.params.id;
  }

  ngOnInit(): void {
       this.store.dispatch(new EditProductAction(this.productId));
       this.store.subscribe(myStore => {
         this.state = myStore.catalogState;
         if (this.state?.dataState === ProductsStateEnum.LOADED){
           if (this.state.currentProduct != null){
             this.productFormGroup = this.fb.group({
               id: [this.state.currentProduct?.id, Validators.required],
               name: [this.state.currentProduct.name, Validators.required],
               price: [this.state.currentProduct.price, Validators.required],
               quantity: [this.state.currentProduct.quantity],
               selected: [this.state.currentProduct.selected],
               available: [this.state.currentProduct.available],
             });

             // 2nd method
             // this.productFormGroup = this.fb.group({});
             // const data = this.state.currentProduct;
             // // tslint:disable-next-line:forin
             // for (const f in data){
             //   // @ts-ignore
             //   this.productFormGroup.addControl(f, new FormControl(data[f], Validators.required));
             // }
             this.formBuilt = true;
           }
         }
       });
  }

  okUpdated(): void{
    this.router.navigateByUrl('/products');
  }

  onUpdateProduct(): void {
     this.submitted = true;
     if (this.productFormGroup?.invalid) { return; }
     this.store.dispatch(new UpdateProductAction(this.productFormGroup?.value));
  }
}
