import { Component, OnInit, Input } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipeservices/receipeservices';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit { 
  @Input() receipe: Receipe;

  constructor(private receipeService: ReceipeService) { }

  ngOnInit() {    
  }

  OnShoppingListSelected(){
    this.receipeService.AddIngredientToShoppingList(this.receipe.ingredients);
  }
}
