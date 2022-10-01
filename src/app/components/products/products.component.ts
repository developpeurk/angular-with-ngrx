import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../model/product/product.model";
import {catchError, map, Observable, of, startWith} from "rxjs";
import {ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes} from "../../state/product.state";
import {Router} from "@angular/router";
import {EventDrivenService} from "../../services/event.driven.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public products$:Observable<AppDataState<Product[]>>|null = null
  readonly DataStateEnum = DataStateEnum;
  constructor(private productService: ProductService, private router:Router, private eventDrivenService:EventDrivenService) { }

  ngOnInit(): void {
    this.eventDrivenService.sourceSubjectObservable.subscribe((actionEvent:ActionEvent)=>{
          this.onActionEvent(actionEvent)
    })
  }

  onGetAllProducts(){
    this.products$ = this.productService.getAllProducts()
      .pipe(
      map((data)=> ({dataState: DataStateEnum.LOADED, data:data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
      );
  }

  onGetSelectedProducts() {
    this.products$ = this.productService.getSelectedProducts()
      .pipe(
        map((data)=> ({dataState: DataStateEnum.LOADED, data:data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
      );
  }

  onGetAvailableProducts() {
    this.products$ = this.productService.getAvailableProducts()
      .pipe(
        map((data)=> ({dataState: DataStateEnum.LOADED, data:data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
      );
  }

  onSearch(dataForm: any) {
    this.products$ = this.productService.searchProducts(dataForm.keyword)
      .pipe(
        map((data)=> ({dataState: DataStateEnum.LOADED, data:data})),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err => of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
      );
  }

  onSelect(p: Product) {
     this.productService.select(p).subscribe({
       next: (data)=>{
        p.selected=data.selected
       }
     })
  }

  onDelete(p: Product) {
    let v=confirm("Etes-vous sure?")
    if(v){
      this.productService.delete(p).subscribe({
        next:(data)=>{
          this.onGetAllProducts()
        }
      })
    }

  }

  onGetNewProduct() {
        this.router.navigateByUrl("/newProduct")
  }

  onEdit(p: Product) {
    this.router.navigateByUrl("/editProduct/"+p.id)
  }

  onActionEvent($event: ActionEvent) {
    switch ($event.type){
      case ProductActionsTypes.GET_ALL_PRODUCT:
        this.onGetAllProducts();
        break;

      case ProductActionsTypes.GET_SELECTED_PRODUCT:
        this.onGetSelectedProducts();
        break;

      case ProductActionsTypes.GET_AVAILABLE_PRODUCT:
        this.onGetAvailableProducts();
        break;

      case ProductActionsTypes.NEW_PRODUCT:
        this.onGetNewProduct()
        break;

      case ProductActionsTypes.SEARCH_PRODUCT:
        this.onSearch($event.payload);
        break;

      case ProductActionsTypes.SELECT_PRODUCT:
        this.onSelect($event.payload);
        break;

      case ProductActionsTypes.EDIT_PRODUCT:
        this.onEdit($event.payload);
        break;

      case ProductActionsTypes.DELETE_PRODUCT:
        this.onDelete($event.payload);
        break;
    }
  }
}
