import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appRadius]'
})
export class RadiusDirective {

  constructor(elem: ElementRef) {
    elem.nativeElement.style.borderRadius = '50%';

   }

}
