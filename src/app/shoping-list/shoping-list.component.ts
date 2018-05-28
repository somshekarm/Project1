import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model'
import { ShoppingListService } from './shopingservices/ShoppingListService';
import { ReceipeService } from '../receipes/receipeservices/receipeservices';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'] 
})
export class ShopingListComponent implements OnInit, OnDestroy {
ingredients: Ingredient[];
ingredientSubject : Subscription;
  constructor(private shoppingListService: ShoppingListService) {   
   }

  ngOnInit() {
    this.ingredients = this.shoppingListService.GetAllIngredient();
    this.ingredientSubject =  this.shoppingListService.ingredientChanged.subscribe(
        (updatedIngredients : Ingredient[]) => {
          this.ingredients = updatedIngredients 
        }
    );   
  }

  ngOnDestroy() {
    this.ingredientSubject.unsubscribe();
  }
}