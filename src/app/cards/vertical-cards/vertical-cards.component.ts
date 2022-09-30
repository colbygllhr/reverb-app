import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical-cards',
  templateUrl: './vertical-cards.component.html',
  styleUrls: ['./vertical-cards.component.css']
})
export class VerticalCardsComponent  {
@Input() img: string;
@Input() description: string;
@Input() price: string;
@Input() condition: string;

constructor(){
  this.img = "";
  this.description = "";
  this.price = "$0";
  this.condition = "";
}

}
