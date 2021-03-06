import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

//manage the shopping list data
export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredients(newIngredients: Ingredient[]) {
    this.ingredients = [...this.ingredients, ...newIngredients];
    //we inform other components that ingredients has been updated
    this.ingredientsChanged.next([...this.ingredients]);
  }
}
