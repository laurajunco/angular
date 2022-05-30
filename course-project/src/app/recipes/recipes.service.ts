import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'A delicious pizza recipe',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg'
    ),
    new Recipe(
      'Stuffed Chicken fillet',
      'Stuffed Chicken fillet for the whole family',
      'https://upload.wikimedia.org/wikipedia/commons/5/57/990402-ians-recipe-01-IMG_4724.jpg'
    ),
  ];

  getRecipes() {
    //return this.recipes; // here we would be passing a direct reference to the object
    return this.recipes.slice(); // a copy of the recipes array
  }
}
