import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

//manage the shopping list data
export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    // this is added to the ingredients array but other components only have access to a copy of it
    this.ingredients.push(ingredient);
    //we inform other components that ingredients has been updated
    this.ingredientsChanged.emit([...this.ingredients]);
  }
}
