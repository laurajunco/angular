import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
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

  constructor() {}

  ngOnInit(): void {}

  onRecipeSelected(rec: Recipe) {
    this.recipeWasSelected.emit(rec);
  }
}
