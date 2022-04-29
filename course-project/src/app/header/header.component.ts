import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  //output makes the property visible from the parent of this component
  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string) {
    //here we emit a event with the name of the selected feature
    this.featureSelected.emit(feature);
  }
}
