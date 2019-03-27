import { Recipe } from './recipe.model';

export class RecipeService {
	private recipes: Recipe[] = [
  	new Recipe(' A Test Recipe', 'This is simple test', 'http://www.foodreporter.fr/upload/original/5/9/v/s/k/834974.jpg'),
  	new Recipe(' Another Test Recipe', 'This is simple test', 'http://www.foodreporter.fr/upload/original/5/9/v/s/k/834974.jpg')
  ];

  getRecipes() {
  	return this.recipes.slice(); //returns a new array with an exact copy of the private array
  }
}