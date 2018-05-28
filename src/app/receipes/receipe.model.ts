import { Ingredient } from "../shared/ingredients.model";

export class Receipe{
    public name: string;
    public description: string;
    public imagePath: string;
    public ingredients : Ingredient[];
    public id : number;

    constructor(id: number, name: string, description: string, imagepath: string, ingredients: Ingredient[]){
        this.id = id;
        this.name = name;
        this.description = description;
        this.imagePath = imagepath;
        this.ingredients = ingredients;
    }

}