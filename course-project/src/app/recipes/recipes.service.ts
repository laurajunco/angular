import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Margherita Pizza',
      'The best homemade margherita pizza with traditional dough',
      'https://upload.wikimedia.org/wikipedia/commons/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      [
        { name: 'Flour', amount: 300 },
        { name: 'Tomatoes', amount: 20 },
        { name: 'Mozzarella cheese', amount: 150 },
      ]
    ),
    new Recipe(
      'Stuffed Chicken fillet',
      'Stuffed chicken breasts make a great dinner party dish',
      'https://upload.wikimedia.org/wikipedia/commons/5/57/990402-ians-recipe-01-IMG_4724.jpg',
      [
        { name: 'Chicken breast', amount: 2 },
        { name: 'Mascarpone', amount: 3 },
        { name: 'Prosciutto', amount: 4 },
      ]
    ),
  ];

  getRecipes() {
    //return this.recipes; // here we would be passing a direct reference to the object
    return this.recipes.slice(); // a copy of the recipes array
  }
}
