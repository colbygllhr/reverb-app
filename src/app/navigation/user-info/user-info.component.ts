import { Component, OnInit, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserInfo } from './user-info.model';

@Injectable()
@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  myInfo: UserInfo | undefined;


  constructor(private http: HttpClient) { 

  }

  ngOnInit(): void {
    console.log("Sending get request to server...")
    this.getUserInfo();
    console.log("Registering showUserInfo as a subscriber...");
    this.showUserInfo();
  }

  getUserInfo() {
    return this.http.get<UserInfo>("https://reverb-app-default-rtdb.firebaseio.com/my-info.json");
  }

  showUserInfo(){
    this.getUserInfo().subscribe((data: UserInfo) => {
      console.log(data);
      this.myInfo = data;
      
    })
  }

}