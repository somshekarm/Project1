import { Component, OnInit } from '@angular/core';
import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipeservices/receipeservices';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {   
  receipes: Receipe[]; 

  constructor(private receipeService: ReceipeService) {     
  }

  ngOnInit() {
    this.receipes = this.receipeService.GetAllReceipe();
  }
}