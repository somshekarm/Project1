import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model'
import { ShoppingListService } from './shopingservices/ShoppingListService';
import { ReceipeService } from '../receipes/receipeservices/receipeservices';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'] 
})
export class ShopingListComponent implements OnInit {
ingredients: Ingredient[];
  constructor(private shoppingListService: ShoppingListService) {   
   }

  ngOnInit() {
    this.ingredients = this.shoppingListService.GetAllIngredient();
    this.shoppingListService.ingredientChanged.subscribe(
        (updatedIngredients : Ingredient[]) => {
          this.ingredients = updatedIngredients 
        }
    );   
  }
}
