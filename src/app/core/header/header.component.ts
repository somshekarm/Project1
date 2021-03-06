import { Component } from "@angular/core";
import { DataStorageService } from "../../shared/data.storage.service";
import { AuthService } from "../../auth/auth.service";


@Component({
    selector: 'app-header',
    templateUrl: "./header.component.html",
})
export class HeaderComponent{
    constructor(private dataStorageService : DataStorageService,
                public authService: AuthService){
        
    }

    OnSaveData(){
        this.dataStorageService.storeReceipe().subscribe(
            ( response ) => console.log(response),
            ( error ) => console.log(error)
        );
    }

    OnFetchData(){
        this.dataStorageService.GetReceipes();
    }

    OnSignOut(){
        this.authService.SignOut();
    }
}