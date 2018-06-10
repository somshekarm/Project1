import { NgModule } from "@angular/core";

import { ReceipeItemComponent } from "./receipe-list/receipe-item/receipe-item.component";
import { ReceipesComponent } from "./receipes.component";
import { ReceipeDetailComponent } from "./receipe-detail/receipe-detail.component";
import { ReceipeListComponent } from "./receipe-list/receipe-list.component";
import { ReceipestartComponent } from "./receipestart/receipestart.component";
import { ReceipeEditComponent } from "./receipe-edit/receipe-edit.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { ReceipeRoutingModules } from "./receipes.routing.modules";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        ReceipesComponent,    
        ReceipeDetailComponent,
        ReceipeListComponent,
        ReceipeItemComponent,
        ReceipestartComponent,
        ReceipeEditComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        ReceipeRoutingModules,
        SharedModule
    ]
})
export class ReceipesModule{    
}