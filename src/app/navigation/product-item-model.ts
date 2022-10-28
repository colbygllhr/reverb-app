export class ProductItemModel {
    img: string;
    description: string;
    price: number;
    condition: string;

    constructor(img: string, description: string, price:number, condition: string){
        this.img = img;
        this.description = description;
        this.price = price;
        this.condition = condition;

    }
}