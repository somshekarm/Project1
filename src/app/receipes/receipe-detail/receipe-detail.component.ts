import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipeservices/receipeservices';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit { 
receipe: Receipe;
id: number;

  constructor(private receipeService: ReceipeService,
              private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {        
    this.activateRoute.params.subscribe(
      (params : Params) => 
      {
        this.id = +params['id'];
        this.receipe = this.receipeService.GetReceipe(this.id);
      }
    );
  }  

  OnShoppingListSelected(){
    this.receipeService.AddIngredientToShoppingList(this.receipe.ingredients);
  }

  OnDelete(){    
    this.receipeService.DeleteReceipe(this.id);   
    this.router.navigate(['../'], {relativeTo: this.activateRoute}); 
  }
}
