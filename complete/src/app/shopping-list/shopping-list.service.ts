import {Ingredient} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {
  // properly created a event emitter to capture the new added ingredient because we are only getting
  // the ingredients by way of a COPY (slice) of the original array
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    return this.ingredients.slice(); // getting a copy of the array
  }

  getIngredient(index: number){
    return this.ingredients[index]; // return the Ingredient we are looking for in the Ingredients array
  }

  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    // for (let ingredient of ingredients) {
    //  this.addIngredient(ingredient);
   // }

    // using the spread operator we can spread our ingredients into a list of single ingredients
    // which will allow use to push our ingredients into an array for the push method
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
