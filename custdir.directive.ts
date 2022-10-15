import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustdir]'
})
export class CustdirDirective {

  constructor(private el:ElementRef, private render:Renderer2 ) { 
    // el.nativeElement.style.backgroundColor='yellow';
    el.nativeElement.style.backgroundColor='yellow';
 //same
    // render.setStyle(el.nativeElement,'backgroundColor','gray' );
  }

}
