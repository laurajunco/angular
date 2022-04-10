import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
  @Output('sCreated') serverCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();
  @Output('bCreated') blueprintCreated = new EventEmitter<{
    name: string;
    content: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onAddServer(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.serverCreated.emit({
      name: nameInput.value,
      content: contentInput.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement, contentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: nameInput.value,
      content: contentInput.value,
    });
  }
}
