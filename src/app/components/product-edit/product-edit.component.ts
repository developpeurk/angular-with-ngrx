import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {FormBuilder, FormGroup, Validators as v} from "@angular/forms";
import {ProductActionsTypes} from "../../state/product.state";
import {EventDrivenService} from "../../services/event.driven.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  public productId!: number
  public productFormGroup!:FormGroup
  public submitted: boolean=false;

  constructor(private eventDrivenService:EventDrivenService,private activatedRoute:ActivatedRoute, private productService:ProductService, private fb: FormBuilder) {
    this.productId=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productService.getOneProduct(this.productId).subscribe({
      next:(product)=>{
         this.productFormGroup =  this.fb.group({
            id:[product.id],
            name:[product.name, v.required],
            price:[product.price, v.required],
            quantity:[product.quantity, v.required],
            selected:[product.selected, v.required],
            available:[product.available, v.required]
          })
      }, error:(err => {
        console.log(err)
      })
    })
  }

  onUpdate() {
    this.submitted = true;
    if(this.productFormGroup.invalid) return
    this.productService.UpdateProduct(this.productFormGroup.value).subscribe({
        next:(data)=>{
          this.eventDrivenService.publishEvent({type: ProductActionsTypes.PRODUCT_UPDATED})
          alert("Success updating product!")
        }, error:(err => {
          console.log(err)
        })
      })
  }
}
