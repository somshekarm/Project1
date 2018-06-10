import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { ShoppingEditComponent } from "./shopping-edit/shopping-edit.component";
import { ShopingListComponent } from "./shoping-list.component";
import { ShopingListRoutingModule } from "./shopinglist.routing.module";


@NgModule({
    declarations:[        
        ShoppingEditComponent,
        ShopingListComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ShopingListRoutingModule
    ]
})

export class ShoppingListModule{

}