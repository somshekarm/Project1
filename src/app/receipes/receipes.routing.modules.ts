import { NgModule } from "@angular/core";

import { Routes, RouterModule } from "@angular/router";
import { ReceipesComponent } from "./receipes.component";
import { ReceipestartComponent } from "./receipestart/receipestart.component";
import { ReceipeEditComponent } from "./receipe-edit/receipe-edit.component";
import { AuthGuard } from "../auth/auth.guard";
import { ReceipeDetailComponent } from "./receipe-detail/receipe-detail.component";

const receipeRoutes : Routes = [
    { path: '', component: ReceipesComponent, 
    children : [
        {path: '', component: ReceipestartComponent },            
        {path:'new', component: ReceipeEditComponent, canActivate : [AuthGuard] } ,
        {path:':id', component: ReceipeDetailComponent, canActivate : [AuthGuard]  },
        {path:':id/edit', component: ReceipeEditComponent, canActivate : [AuthGuard]  }    
    ]
},
]

@NgModule({
    imports : [
        RouterModule.forChild(receipeRoutes)
    ],
    exports : [ RouterModule ]
})

export class ReceipeRoutingModules{    
}