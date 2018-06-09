import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  errorMessage : string = '';
  isError : boolean;

  constructor(private authService: AuthService) { 
    this.isError = false;
  }

  ngOnInit() {
  }

  OnSignIn(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.signIn(email, password);
    this.errorMessage = this.authService.errorMessage;
    this.isError = this.authService.isError;
  }
}
