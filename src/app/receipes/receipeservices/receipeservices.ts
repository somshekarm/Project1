import { Output, Injectable } from "@angular/core";
import { Receipe } from "../receipe.model";
import { Ingredient } from "../../shared/ingredients.model";
import { ShoppingListService } from "../../shoping-list/shopingservices/ShoppingListService";
import { Subject } from "rxjs";

@Injectable()
export class ReceipeService{       
    receipeChanged = new Subject<Receipe[]>();
    private receipes : Receipe[];

    constructor(private shopingListService: ShoppingListService){     
        this.receipes = [
            new Receipe(        
                1,
                "Test Recepe 1", 
                "Simple Description of receipe 1",
                 "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Handi-chicken-recipe.jpg/800px-Handi-chicken-recipe.jpg",
                 [new Ingredient("Meat", 45), new Ingredient("Garlic", 2)]
                ),
            new Receipe(
                2,
                "Test Recepe 2",
                 "Simple Description of receipe 2",
                  "https://www.maxpixel.net/static/photo/1x/Zucchini-Strawberry-Recipe-Food-Crunchy-Bread-1692490.jpg",
                  [new Ingredient("Chicken", 45), new Ingredient("Buns", 20)]
            )
          ];
    }

    GetReceipe(id: number){
        return this.receipes.slice().find( (x)=> x.id === id );
    }

    GetAllReceipe(){
        return this.receipes.slice();
    }   

    AddIngredientToShoppingList(ingredients: Ingredient[]){
        this.shopingListService.AddIngredients(ingredients);
    }

    AddReceipe(receipe: Receipe){
        receipe.id =  this.receipes.length +1
        this.receipes.push(receipe);       
        this.receipeChanged.next(this.receipes.slice());     
    }

    UpdateReceipe(newReceipe: Receipe){
        let index = this.receipes.findIndex(x => x.id === newReceipe.id);        
        this.receipes[index].name = newReceipe.name;
        this.receipes[index].description = newReceipe.description;
        this.receipes[index].imagePath = newReceipe.imagePath;
        this.receipes[index].ingredients = newReceipe.ingredients;    
        this.receipeChanged.next(this.receipes.slice());    
    }

    DeleteReceipe(id: number){
        var index: number = this.receipes.findIndex((x) => x.id === id);
        this.receipes.splice(index,1);
        this.receipeChanged.next();        
    }
}