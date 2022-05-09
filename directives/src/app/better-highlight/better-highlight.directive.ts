import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]",
})
export class BetterHighlightDirective implements OnInit {
  //we acces one property in the element
  @HostBinding("style.backgroundColor") backgroundColor: string = 'red';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "green"
    // );
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    this.backgroundColor = 'green'
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "green"
    // );
  }

  //we define the name of the event and tell the listener which 'event' to listen to
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.backgroundColor = 'transparent'
    // this.renderer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
  }
}
