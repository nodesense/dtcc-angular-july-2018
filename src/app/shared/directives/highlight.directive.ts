import { Directive,

        ElementRef,
        HostListener,
        Renderer2
} from '@angular/core';


// <div appHighlight ></div>
// <input appHighlight

// input, div etc,, called host element

// no view, no styles

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // dependency injection, angular pass host element reference
  constructor(private hostElement: ElementRef, 
              private renderer: Renderer2) { 
      console.log('highlight directive created')
  }

  @HostListener('click')
  onClick() {
    console.log('Directive host clicked')
  }

  @HostListener('mouseenter')
  onEnter() {
   // console.log('mouse enter');
    this.renderer.setStyle(this.hostElement.nativeElement, 
                            'background',
                            'lightgreen');
  }

  @HostListener('mouseleave')
  onLeave() {
    //console.log('mouse leave');
    this.renderer.removeStyle(this.hostElement.nativeElement,
                              'background');
  }

}
