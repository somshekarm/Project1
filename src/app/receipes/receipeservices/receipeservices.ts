import { Output, Injectable, OnInit } from "@angular/core";
import { HttpModule, Http } from "@angular/http";
import { Receipe } from "../receipe.model";
import { Ingredient } from "../../shared/ingredients.model";
import { ShoppingListService } from "../../shoping-list/shopingservices/ShoppingListService";
import { Subject } from "rxjs";
import 'rxjs/Rx';

@Injectable()
export class ReceipeService {       
    receipeChanged = new Subject<Receipe[]>();
    receipes : Receipe[];

    constructor(private shopingListService: ShoppingListService){     
        this.receipes = [];
    }    

    GetReceipe(id: number){
        return this.receipes.slice().find( (x)=> x.id === id );
    }

    GetAllReceipe(){             
        return this.receipes.slice();
    }   

    SetReceipe(receipes: Receipe[]){
        this.receipes = receipes;        
        this.receipeChanged.next(this.receipes.slice());
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