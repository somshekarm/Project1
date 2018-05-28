import { Ingredient } from "../../shared/ingredients.model";
import { Output, EventEmitter,OnInit } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService{
    // ingredientChanged = new EventEmitter<Ingredient[]>();
    ingredientChanged = new Subject;

 @Output()  ingredients :Ingredient[] = [
     new Ingredient("Apple", 25),
     new Ingredient("Mango", 35)
 ];
    constructor(){}

    GetAllIngredient(){
        return this.ingredients.slice();
    }

    AddIngredient(name: string, amount: number){
        this.ingredients.push(new Ingredient(name,amount));
        this.ingredientChanged.next(this.ingredients.slice());
    }

    AddIngredients(ingredients: Ingredient[]){
        for(let ingredient of ingredients){
            this.AddIngredient(ingredient.name, ingredient.amount);
        }
    }
}