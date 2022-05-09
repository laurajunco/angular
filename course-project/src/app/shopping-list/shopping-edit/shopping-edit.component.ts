import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output('ingAdded') ingredientAdded = new EventEmitter<Ingredient>();
  //with this we select the element with the local reference #nameInput
  @ViewChild('nameInput') nameInputRef: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInputRef: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      +this.amountInputRef.nativeElement.value
    );
    this.ingredientAdded.emit(newIngredient);
  }
}
