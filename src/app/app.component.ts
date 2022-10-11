import { Component } from '@angular/core';
import { mock_product_list } from './cards/vertical-cards/mock-product-list';
import { ProductItemModel } from './cards/vertical-cards/product-item-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reverb-app';

  products: ProductItemModel [] = [];

  constructor(){
    //put some code to fetch data from backend using http

    for (var product of mock_product_list) {
      console.log(product);
      this.products.push(product);
    }
    
    
  }
}
