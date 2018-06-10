import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { ShopingListComponent } from "./shoping-list.component";

const shoppingListRoutes : Routes = [
    { path: 'shopping-list', component: ShopingListComponent }
]

@NgModule({
    imports:[
        RouterModule.forChild(shoppingListRoutes)
    ],
    exports: [
        CommonModule,
        RouterModule
    ]
})

export class ShopingListRoutingModule{

}