import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item-model";
import { AngularFireDatabase } from '@angular/fire/compat/database'

@Injectable (
 {providedIn: 'root'}

)

export class ProductsService{
    private baseUrl:string  = "https://reverb-app-default-rtdb.firebaseio.com/"
    private productsEndPoint:string = "products.json";

    constructor(private db:AngularFireDatabase) {

    }

    getProducts(){
        return this.db.list<ProductItemModel>("products").valueChanges();
    }  

    // getProduct(index:number){
    //     return this.db.list<ProductItemModel>(this.baseUrl + 'products' + '/' + index + '.json');
    // }

    addProduct(product:ProductItemModel){
        this.db.list<ProductItemModel>("products").push(product);
    }
}
