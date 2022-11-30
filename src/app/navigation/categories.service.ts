import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryCardModel } from "./category-card-model";

@Injectable (
 {providedIn: 'root'}

)

export class CategoryService{
    private baseUrl:string  = "https://reverb-app-default-rtdb.firebaseio.com/"
    private categoriesEndPoint:string = "categories.json";

    constructor(private http:HttpClient) {

    }

    getCategories(){
        return this.http.get<CategoryCardModel[]>(this.baseUrl + this.categoriesEndPoint);
    }  

    getCategory(index:number){
        return this.http.get<CategoryCardModel>(this.baseUrl + 'categories' + '/' + index + '.json');
    }
}
