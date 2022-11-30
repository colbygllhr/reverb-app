import { Component, OnInit  } from "@angular/core";

import { ProductItemModel } from "./product-item-model";
import { CategoryCardModel } from "./category-card-model";

import { ProductsService } from "./products.service";

@Component({
    selector: 'home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls: ['home-layout.component.css']
})
export class HomeLayoutComponent{
    products: ProductItemModel [] = [];
    categories: CategoryCardModel [] = [];


    constructor(private productsService:ProductsService) {
      //put some code to fetch data from backend using http
      
    }






      ngOnInit(): void{
        this.productsService.getProducts().subscribe((data: ProductItemModel []) => {
          console.log("Fetching products...");
          for (var product of data){
            console.log(product);
            this.products.push(product);

          }

        
        });
       
      }
    }


  
