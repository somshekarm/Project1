import { NgModule } from "@angular/core";
import { SigninComponent } from "./signin/signin.component";
import { SignupComponent } from "./signup/signup.component";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth.routing.module";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";

@NgModule({
    declarations :[
        SigninComponent,
        SignupComponent
    ],
    imports: [
        CommonModule,
        FormsModule,        
        AuthRoutingModule
    ]
})

export class AuthModule{
}