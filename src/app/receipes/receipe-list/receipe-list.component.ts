import { Component, OnInit, OnDestroy } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipeservices/receipeservices';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit, OnDestroy {   
  receipes: Receipe[]; 

  constructor(private receipeService: ReceipeService) {     
  }

  ngOnInit() {
    this.receipes = this.receipeService.GetAllReceipe();
    this.receipeService.receipeChanged.subscribe(
      () => this.receipes = this.receipeService.GetAllReceipe()
    );
  }

  ngOnDestroy(){
    this.receipeService.receipeChanged.unsubscribe;
  }
}