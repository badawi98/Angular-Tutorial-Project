import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipe[] = [
    new Recipe('Test Racipe' , 'This is A simple Description' , 'https://images.immediate.'+
    'co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1274503_8-8d8dfb5.jpg?quality=90&resize=960,872'),
    new Recipe('Test Racipe' , 'This is A simple Description' , 'https://images.immediate.'+
    'co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-1274503_8-8d8dfb5.jpg?quality=90&resize=960,872'),
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
