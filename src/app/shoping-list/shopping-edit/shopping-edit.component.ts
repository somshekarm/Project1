import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms"
import { Ingredient } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopingservices/ShoppingListService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {  
  @ViewChild('f') form : NgForm;
  editedIngredient : Ingredient;  
  index: number;
  editIngredientSubscription : Subscription;
  editMode: boolean = false;

  constructor(private shoppingListService: ShoppingListService) { }


  ngOnInit() {
    this.editIngredientSubscription = this.shoppingListService.editIngredient.subscribe(
      (index:number) => {
        this.index = index;
        this.editedIngredient = this.shoppingListService.GetIngredient(index);
        this.editMode = true;
        this.form.setValue({
          name : this.editedIngredient.name,
          amount : this.editedIngredient.amount
        })
      }
    );
  }

  onSubmit(form:NgForm){
    var value = form.value;    
    this.editMode ? this.shoppingListService.UpdateIngredient(this.index, value.name, value.amount) :
    this.shoppingListService.AddIngredient(value.name, value.amount);   
    this.ResetForm(); 
  }

  OnDelete(){
    this.shoppingListService.DeleteIngredient(this.index);
    this.ResetForm();
  }

  OnClear(){
    this.ResetForm();
  }

  ngOnDestroy(){
    this.editIngredientSubscription.unsubscribe;
  }

  ResetForm(){
    this.editMode = false;
    this.form.reset();
  }
}
