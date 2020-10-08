import { Component, OnInit } from '@angular/core';
import {ingredients} from '../shared/ingredients.model'
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : ingredients[] = [
    new ingredients ('Aplle' , 5),
    new ingredients ('Tomatoes' , 10)
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
