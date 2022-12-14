import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators as v} from "@angular/forms";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  productFormGroup!:FormGroup
  submitted: boolean= false;

  constructor(private fb:FormBuilder, private productService :ProductService) { }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name:["", v.required],
      price:[0, v.required],
      quantity:[0, v.required],
      selected:[true,v.required],
      available:[true,v.required],
    })
  }

  onSave() {
    this.submitted = true;
    if(this.productFormGroup.invalid) return
    this.productService.save(this.productFormGroup.value).subscribe({
      next:(data)=>{
         alert("Success saving product!")
      },
      error:(err => {
        console.log(err)
      })
    })
  }
}
