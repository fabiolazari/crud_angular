import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appRed]'
})
export default class RedDirective {

    constructor(private el: ElementRef) {
        el.nativeElement.style.color = '#e35e6b';
    }
}
