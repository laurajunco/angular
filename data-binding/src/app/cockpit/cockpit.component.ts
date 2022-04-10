import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  ViewChild,
  ElementRef,
} from '@angular/core';

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

  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      name: nameInput.value,
      content: this.serverContentInput.nativeElement.value,
    });
  }
}
