import { Output, EventEmitter, Injectable } from "@angular/core";
import { Receipe } from "../receipe.model";
import { Ingredient } from "../../shared/ingredients.model";
import { ShoppingListService } from "../../shoping-list/shopingservices/ShoppingListService";

@Injectable()
export class ReceipeService{    
   receipeSelected = new EventEmitter<Receipe>();
    private receipes : Receipe[] = [
    new Receipe(
        "Test Recepe 1", 
        "Simple Description of receipe 1",
         "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Handi-chicken-recipe.jpg/800px-Handi-chicken-recipe.jpg",
         [new Ingredient("Meat", 45), new Ingredient("Garlic", 2)]
        ),
    new Receipe(
        "Test Recepe 2",
         "Simple Description of receipe 2",
          "https://www.maxpixel.net/static/photo/1x/Zucchini-Strawberry-Recipe-Food-Crunchy-Bread-1692490.jpg",
          [new Ingredient("Chicken", 45), new Ingredient("Buns", 20)]
    )
  ];

    constructor(private shopingListService: ShoppingListService){     
    }

    GetAllReceipe(){
        return this.receipes.slice();
    }   

    AddIngredientToShoppingList(ingredients: Ingredient[]){
        this.shopingListService.AddIngredients(ingredients);
    }
}