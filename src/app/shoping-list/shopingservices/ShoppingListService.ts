import { Ingredient } from "../../shared/ingredients.model";
import { Output, EventEmitter,OnInit } from "@angular/core";
import { Subject } from "rxjs";

export class ShoppingListService{    
    ingredientChanged = new Subject;
    editIngredient = new Subject<number>();

 @Output()  ingredients :Ingredient[] = [
     new Ingredient("Apple", 25),
     new Ingredient("Mango", 35)
 ];
    constructor(){}

    GetAllIngredient(){
        return this.ingredients.slice();
    }

    GetIngredient(index: number){
        return this.ingredients[index];
    }

    AddIngredient(name: string, amount: number){
        this.ingredients.push(new Ingredient(name,amount));
        this.ingredientChanged.next(this.ingredients.slice());
    }

    UpdateIngredient(index : number, name: string, amount: number){
        this.ingredients[index].name = name;
        this.ingredients[index].amount = amount;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    DeleteIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientChanged.next(this.ingredients.slice());        
    }

    AddIngredients(ingredients: Ingredient[]){
        for(let ingredient of ingredients){
            this.AddIngredient(ingredient.name, ingredient.amount);
        }
    }
}