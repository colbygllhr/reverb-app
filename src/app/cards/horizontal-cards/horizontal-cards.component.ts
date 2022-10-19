import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal-cards',
  templateUrl: './horizontal-cards.component.html',
  styleUrls: ['./horizontal-cards.component.css']
})
export class HorizontalCardsComponent implements OnInit {
  @Input() img: string;
  @Input() title: string;
  @Input() description: string;
 
  
  constructor() { 
    this.img = "";
    this.title = "";
    this.description = "";
  }

  ngOnInit(): void {
  }

}
