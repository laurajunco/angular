import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

//encapsulation emulated is the default.
//none disables the encapsulation. css will affect everything
//native uses the shadow dom 
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string; name: string; content: string };

  constructor() {}

  ngOnInit(): void {}
}
