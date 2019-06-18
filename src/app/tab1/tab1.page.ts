import { Platform, NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
 
  users: Observable<any>;
 
  constructor(private nvctrl: NavController, private http: HttpClient) { }
 
  ngOnInit() {
    this.users = this.http.get('http://jsonplaceholder.typicode.com/users');
    this.users.subscribe(data => {
      console.log('my data: ', data);
    });
  }
 
 openDetails(user) {
    this.nvctrl.navigateForward('user-detail/'+user);
  }
 addUser() {
    this.nvctrl.navigateForward('tab3');
  }

}
