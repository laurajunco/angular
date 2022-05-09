import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[appUnless]",
})

// This directive will do the oposite of ngIf
export class UnlessDirective {
  //setter of the property
  //sets the property whenever the porperty changes
  //the name has to be the same of the directive selector
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      //creates a view in the container with the template ref
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      //destroys all the views in the container
      this.vcRef.clear();
    }
  }
  //Template is what we want to render
  //view container is where we want to render
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {}
}
