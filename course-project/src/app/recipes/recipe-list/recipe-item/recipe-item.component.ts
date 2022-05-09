import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  //output makes the property visible from the parent of this component
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}
  onSelect() {
    //We dont need to emit the recipe because the parent already knows it
    this.recipeSelected.emit();
  }
}
