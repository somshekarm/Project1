// Note: AuthGuard is just an implementation, but enabling and disabling of Menus is 
// already taken care in HeaderComponent.html file based on Authentication.


import { CanActivate, RouterStateSnapshot, ActivatedRoute, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private auth: AuthService){
    }
    canActivate(route: ActivatedRouteSnapshot, status: RouterStateSnapshot ){
        return this.auth.isAuthenticated();
    }
}