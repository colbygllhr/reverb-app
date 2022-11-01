import { Component  } from "@angular/core";
import { mock_product_list } from "./mock-product-list";
import { ProductItemModel } from "./product-item-model";
import { CategoryCardModel } from "../cards/horizontal-cards/category-card-model";
import { mock_category_list } from "../cards/horizontal-cards/mock-category-list";
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
  
      for (var product of mock_product_list) {
        console.log(product);
        this.products.push(product);
      }

      for (var category of mock_category_list) {
        console.log(category);
        this.categories.push(category);
      }
    }
  }