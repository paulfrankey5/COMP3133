import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[customInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) {}

  @HostListener('blur') onBlur() {
    let value = this.el.nativeElement.value;
    this.el.nativeElement.value = value.toUpperCase();
  }
}