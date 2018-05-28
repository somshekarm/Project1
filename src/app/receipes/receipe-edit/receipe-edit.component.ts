import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ReceipeService } from '../receipeservices/receipeservices';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-edit',
  templateUrl: './receipe-edit.component.html',
  styleUrls: ['./receipe-edit.component.css']
})
export class ReceipeEditComponent implements OnInit {
id: number;
@Output() receipe : Receipe;
editMode: boolean = false;
  constructor(private activatedRoute: ActivatedRoute,
    private receipeService: ReceipeService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (param: Params) => {
        this.id = param['id'];
        this.id === undefined ? this.editMode = false : this.editMode = true;     
        // if(this.editMode){
        //   this.receipe = this.receipeService.GetReceipe(this.id);
        // }
        this.editMode ? this.receipe = this.receipeService.GetReceipe(+this.id) : 
        this.receipe = undefined;
        
      }
    );   
  }
}