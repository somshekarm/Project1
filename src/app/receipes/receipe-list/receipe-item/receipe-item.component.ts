import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Receipe } from '../../receipe.model';
import { ReceipeService } from '../../receipeservices/receipeservices';

@Component({
  selector: 'app-receipe-item',
  templateUrl: './receipe-item.component.html',
  styleUrls: ['./receipe-item.component.css']
})
export class ReceipeItemComponent implements OnInit {
@Input() receipe :Receipe;

  constructor(private receipeServices: ReceipeService) { }

  ngOnInit() {
  }

  OnSelected(){
    this.receipeServices.receipeSelected.emit(this.receipe);
  }
}
