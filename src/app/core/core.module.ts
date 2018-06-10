import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { SharedModule } from "../shared/shared.module";
import { AppRoutingModule } from "../app.routing.module";
import { ShoppingListService } from "../shoping-list/shopingservices/ShoppingListService";
import { ReceipeService } from "../receipes/receipeservices/receipeservices";
import { DataStorageService } from "../shared/data.storage.service";
import { AuthService } from "../auth/auth.service";

@NgModule({
    declarations:[
        HomeComponent,
        HeaderComponent
    ],
    imports:[
        SharedModule,
        AppRoutingModule
    ],
    exports:[
        AppRoutingModule,
        HeaderComponent
    ],
    providers:[ ShoppingListService, ReceipeService, DataStorageService,AuthService]

})
export class CoreModule{

}