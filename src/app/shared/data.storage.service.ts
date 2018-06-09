import { Http, Response } from "@angular/http";
import { ReceipeService } from "../receipes/receipeservices/receipeservices";
import { Injectable } from "@angular/core";
import { Receipe } from "../receipes/receipe.model";
import { AuthService } from "../auth/auth.service";
// import 'rxjs/Rx'

@Injectable()
export class DataStorageService{
    constructor(private http: Http, private receipeService: ReceipeService,
                private authService: AuthService){ }

    storeReceipe(){
        const token = this.authService.getToken();
        return this.http.put('https://ng-receipe-35875.firebaseio.com/Receipes.json?auth='+token, this.receipeService.GetAllReceipe());
    }

    GetReceipes(){
        const token = this.authService.getToken();
        return this.http.get('https://ng-receipe-35875.firebaseio.com/Receipes.json?auth='+token)
        .map(
            (response: Response) =>{
                const receipes : any  = response.json();
                for(let receipe of receipes){
                    if(!receipe['ingredients'])
                    receipe['ingredients'] = [];
                }
                return receipes;
            }            
        )
        .subscribe(
            (receipes : Receipe[]) => {               
               this.receipeService.SetReceipe(receipes); 
            }
        );
    }
}