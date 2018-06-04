import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReceipeService } from '../receipeservices/receipeservices';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
  styleUrls: ['./receipe-edit.component.css']
})
export class ReceipeEditComponent implements OnInit {
receipeForm : FormGroup;
id: number;
@Output() receipe : Receipe;
editMode: boolean = false;
  constructor(private activatedRoute: ActivatedRoute,
    private receipeService: ReceipeService,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.id = param['id'];
        this.id === undefined ? this.editMode = false : this.editMode = true;
        this.onFormsInit();
      }
    );   
  }

  onSubmit(){
     let updatedReceipe: Receipe = this.receipeForm.value;
     updatedReceipe.id = +this.id;
    this.editMode ? this.receipeService.UpdateReceipe(updatedReceipe) :
      this.receipeService.AddReceipe(updatedReceipe);
      this.OnCancel();
  }

  onFormsInit(){
    this.receipe = this.receipeService.GetReceipe(+this.id);
    let receipeName = '';
    let receipeDescription = '';
    let receipeImage = '';
    let ingredients = new FormArray([]);

    if(this.editMode){    
      receipeName = this.receipe.name;
      receipeDescription = this.receipe.description;
      receipeImage = this.receipe.imagePath;

      if(this.receipe['ingredients'])
      {      
        for(let ingredient of this.receipe.ingredients){
          ingredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount, 
                [ Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
            })
          );
        }
      }
    }

    this.receipeForm = new FormGroup(      
      {
      'name' : new FormControl(receipeName,Validators.required),
      'description' :new FormControl(receipeDescription,Validators.required),
      'imagePath': new FormControl(receipeImage, Validators.required),
      'ingredients' :ingredients
    });
  }

  AddIngredient(){
   (<FormArray>this.receipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, 
          [ Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
          ])
      })
    );
  }
  OnCancel(){    
    this.FormReset();
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }

  OnIngredientDelete(index: number){
    (<FormArray>this.receipeForm.get("ingredients")).removeAt(index);
  }

  FormReset(){
    this.receipeForm.reset();
      this.editMode = false;
  }
}