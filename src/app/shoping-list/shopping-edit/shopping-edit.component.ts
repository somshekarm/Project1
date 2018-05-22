import { Component, OnInit} from '@angular/core';
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopingservices/ShoppingListService';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddClick(name: string, amount: number){
    this.shoppingListService.AddIngredient(name, amount);    
  }
}
