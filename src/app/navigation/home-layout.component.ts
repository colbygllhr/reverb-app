import { Component } from "@angular/core";
import { mock_product_list } from "../cards/vertical-cards/mock-product-list";
import { ProductItemModel } from "../cards/vertical-cards/product-item-model";

@Component({
    selector: 'home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent{
    products: ProductItemModel [] = [];


    constructor(){
      //put some code to fetch data from backend using http
  
      for (var product of mock_product_list) {
        console.log(product);
        this.products.push(product);
      }
      
      
    } 
}