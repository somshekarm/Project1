import { NgModule } from '@angular/core';
import { Routes, RouterLink, RouterModule } from '@angular/router'

import { ReceipesComponent } from './receipes/receipes.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { HeaderComponent } from './header/header.component';
import { ReceipeDetailComponent } from './receipes/receipe-detail/receipe-detail.component';
import { ReceipestartComponent } from './receipes/receipestart/receipestart.component';
import { ReceipeEditComponent } from './receipes/receipe-edit/receipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AuthGuard } from './auth/auth.guard';


const appRoutes: Routes = [    
    { path:'', redirectTo: '/receipes', pathMatch: 'full' },
    { path: 'receipes', component: ReceipesComponent, 
        children : [
            {path: "", component: ReceipestartComponent },            
            {path:'new', component: ReceipeEditComponent, canActivate : [AuthGuard] } ,
            {path:':id', component: ReceipeDetailComponent, canActivate : [AuthGuard]  },
            {path:':id/edit', component: ReceipeEditComponent, canActivate : [AuthGuard]  }    
        ]
    },
    { path: 'shopping-list', component: ShopingListComponent },
    {path: 'signup', component: SignupComponent},
    {path: 'signin', component: SigninComponent}
]

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes)
    ],
    exports : [ RouterModule ]
})

export class AppRoutingModule{

}