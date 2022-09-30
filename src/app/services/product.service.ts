import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Product} from "../model/product/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
 private url : string = environment.host

  constructor(private http: HttpClient) { }

  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url + "/products")
  }

  getSelectedProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url + "/products?selected=true")
  }

  getAvailableProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url + "/products?available=true")
  }

  searchProducts(keyword:string):Observable<Product[]>{
    return this.http.get<Product[]>(this.url + "/products?name_like="+keyword)
  }
}
