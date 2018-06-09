import * as fireBase from 'firebase'
import { OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService implements OnInit{

    errorMessage : string = '';    
    isError : boolean;
    token: string = '';

    constructor(private route: Router){

    }

    ngOnInit(){
        this.isError = false;
    }

    signUP(email: string, password: string){
        fireBase.auth().createUserAndRetrieveDataWithEmailAndPassword(email,password).catch(
            (error) =>  console.log(error)
            
        );
    }

    signIn(email: string, password: string){
        fireBase.auth().signInWithEmailAndPassword(email, password).then(
            response => {           
                this.route.navigate(['/']); 
                fireBase.auth().currentUser.getIdToken().then(
                    (token) => this.token = token
                );                
            }
        ).catch(
            error => 
                {
                    this.isError = true;
                    this.errorMessage = "Email or Password is not correct";
                }
        );            
    }

    getToken(){
        fireBase.auth().currentUser.getIdToken().then(
            (token) => this.token = token
        );    
        return this.token;            
    }

    isAuthenticated(){
        return this.token != null;
    }

    SignOut(){
        fireBase.auth().signOut();
        this.token = null;
    }
}