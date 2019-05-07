import { Component, OnInit, Input } from '@angular/core';
import  { Recipe } from '../../recipe.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  // Could also add a call to the recipeService and simply retrieve the id
  @Input() index: number;

  ngOnInit() {
  }

}
