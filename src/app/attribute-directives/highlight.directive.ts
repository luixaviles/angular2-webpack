import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({ 
    selector: '[myHighlight]' 
})
export class HighlightDirective {
    private el: HTMLElement;
    private _defaultColor = 'red';

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
    }

    @Input('myDefaultColor')
    set defaultColor(colorName: string) {
        this._defaultColor = colorName || this._defaultColor;
        console.log('updating color: ' + colorName);
        this.highlight(colorName);
    }

    @Input('myHighlight')
    highlightColor: string;

    @HostListener('mouseenter')
    onMouseEnter() {
        this.highlight(this.highlightColor || this._defaultColor);
    }

    @HostListener('mouseleave')
    onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.style.backgroundColor = color;
    }
}