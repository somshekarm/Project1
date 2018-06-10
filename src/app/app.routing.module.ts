import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy, PreloadAllModules } from '@angular/router'
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [    
    { path: '', component: HomeComponent },    
    { path: 'receipes', loadChildren : './receipes/receipes.module#ReceipesModule', canActivate: [AuthGuard] }
]

@NgModule({
    imports : [
        RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules } )
    ],
    exports : [ RouterModule ]
})

export class AppRoutingModule{

}