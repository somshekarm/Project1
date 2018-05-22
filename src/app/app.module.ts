import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/header/header.component';
import { ReceipesComponent } from './receipes/receipes.component';
import { ReceipeDetailComponent } from './receipes/receipe-detail/receipe-detail.component';
import { ReceipeListComponent } from './receipes/receipe-list/receipe-list.component';
import { ReceipeItemComponent } from './receipes/receipe-list/receipe-item/receipe-item.component';
import { ShopingListComponent } from './shoping-list/shoping-list.component';
import { ShoppingEditComponent } from './shoping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective} from './shared/dropdown.directive';
import { ShoppingListService } from './shoping-list/shopingservices/ShoppingListService';
import { ReceipeService } from './receipes/receipeservices/receipeservices';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceipesComponent,
    ReceipeDetailComponent,
    ReceipeListComponent,
    ReceipeItemComponent,
    ShopingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [ShoppingListService, ReceipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
