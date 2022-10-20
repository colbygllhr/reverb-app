import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
  }

  getUserInfo() {
    return this.http.get('https://reverb-app-default-rtdb.firebaseio.com/my-info.json');
  }

}
