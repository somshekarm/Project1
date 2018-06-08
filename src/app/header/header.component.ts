import { Component } from "@angular/core";
import { ReceipeService } from "../receipes/receipeservices/receipeservices";
import { DataStorageService } from "../shared/data.storage.service";

@Component({
    selector: 'app-header',
    templateUrl: "./header.component.html",
})
export class HeaderComponent{
    constructor(private dataStorageService : DataStorageService){
        
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
}