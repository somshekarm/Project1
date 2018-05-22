import { Ingredient } from "../shared/ingredients.model";

export class Receipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients : Ingredient[];

    constructor(name: string, description: string, imagepath: string, ingredients: Ingredient[]){
        this.name = name;
        this.description = description;
        this.imagePath = imagepath;
        this.ingredients = ingredients;
    }

}