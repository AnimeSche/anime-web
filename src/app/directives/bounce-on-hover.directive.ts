import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appBounceOnHover]'
})
export class BounceOnHoverDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) { }

    @HostListener('mouseenter') onMouseEnter() {
        this.renderer.addClass(this.el.nativeElement, 'animate__animated');
        this.renderer.addClass(this.el.nativeElement, 'animate__bounce');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.renderer.removeClass(this.el.nativeElement, 'animate__animated');
        this.renderer.removeClass(this.el.nativeElement, 'animate__bounce');
    }
}
