import { NgModule } from '@angular/core';
import { Routes, RouterLink, RouterModule } from '@angular/router'

import { ReceipesComponent } from './receipes/receipes.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { HeaderComponent } from './header/header.component';
import { ReceipeDetailComponent } from './receipes/receipe-detail/receipe-detail.component';
import { ReceipestartComponent } from './receipes/receipestart/receipestart.component';
import { ReceipeEditComponent } from './receipes/receipe-edit/receipe-edit.component';


const appRoutes: Routes = [    
    { path:'', redirectTo: '/receipes', pathMatch: 'full' },
    { path: 'receipes', component: ReceipesComponent, 
        children : [
            {path: "", component: ReceipestartComponent },            
            {path:'new', component: ReceipeEditComponent },
            {path:':id', component: ReceipeDetailComponent },
            {path:':id/edit', component: ReceipeEditComponent }    
        ]
    },
    { path: 'shopping-list', component: ShopingListComponent }
]

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)
    ],
    exports : [ RouterModule ]
})

export class AppRoutingModule{

}