import { Component, OnInit } from '@angular/core';
import * as fireBase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent implements OnInit {
 
  ngOnInit(){
    fireBase.initializeApp({
      apiKey: "AIzaSyDAPhw2otyii0Pi42993VhlhmL7t2qP2ns",
    authDomain: "ng-receipe-35875.firebaseapp.com",
    });    
  }
}
