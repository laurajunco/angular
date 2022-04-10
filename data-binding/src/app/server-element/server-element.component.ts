import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

//encapsulation emulated is the default.
//none disables the encapsulation. css will affect everything
//native uses the shadow dom
@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() name: string;
  @ViewChild('header') header: ElementRef;
  //for accesing elements inside <ng-content>
  @ContentChild('contentParagraph') paragraph: ElementRef;

  //Initializes component
  constructor() {
    console.log('constructor called!');
  }

  //when any @Input property changes
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!', changes);
  }

  //after cosntructor
  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('header: ', this.header); //will be undefined
    console.log('paragraph: ', this.paragraph); //will be undefined
  }

  //constantly runs to check for changes
  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  //runs after <ng-content> is initialized
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log('paragraph: ', this.paragraph.nativeElement.textContent); //will have value
  }

  //runs after <ng-content> is checked for changes
  ngAfterContentChecked(): void {
    console.log('ngAfterContentCheck called!');
  }

  //runs after component is rendered
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log('header: ', this.header.nativeElement.textContent); //will have value
  }

  //runs after component is rendered
  ngAfterViewChecked(): void {
    console.log('ngAfterViewCheck called!');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
