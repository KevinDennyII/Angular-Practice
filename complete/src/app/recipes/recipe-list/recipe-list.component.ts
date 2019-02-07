import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
  	new Recipe(' A Test Recipe', 'This is simple test', 'http://www.foodreporter.fr/upload/original/5/9/v/s/k/834974.jpg'),
  	new Recipe(' A Test Recipe', 'This is simple test', 'http://www.foodreporter.fr/upload/original/5/9/v/s/k/834974.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
