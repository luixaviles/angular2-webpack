import {Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
    selector: 'input[passwordGenerator]',
    host: {
        // '(input)': 'onChange($event)',
        // '(keyup)': 'onChange($event)'
    }
})
export class PasswordGeneratorDirective {
    private control: any;
    private el: HTMLElement;
    private renderer: any;
    private DEFAULT_LENGTH = 6;
    private _passwordLength: Number = this.DEFAULT_LENGTH;
    private _includeNumbers: boolean = false;
    private _includeUppercaseChars: boolean = false;
    private _includeSymbols: boolean = false;

    constructor(el: ElementRef, renderer: Renderer) {
        this.el = el.nativeElement;
        this.renderer = renderer;
    }

    ngOnInit() {
        // this.control = createTextMaskInputElement(Object.assign({ inputElement: this.inputElement, }, this.textMaskConfig))

        // This ensures that initial model value gets masked
        // setTimeout(() => this.onInput())
    }

    onChange($event) {
        $event.target.value = $event.target.value + '.';
    }

    @Input('passwordLength')
    set passwordLength(passwordLength: Number) {
        this._passwordLength = passwordLength;
        this.generatePassword();
    }

    @Input('includeNumbers')
    set includeNumbers(includeNumbers: boolean) {
        this._includeNumbers = includeNumbers;
        this.generatePassword();
    }

    @Input('passwordGenerator')
    passwordValue: string;

    private generatePassword() {
        console.log('[generatePassword]length: ' + this._passwordLength);
        console.log('[generatePassword]includeNumbers: ' + this._includeNumbers);

        let passwordValue = this._passwordLength + '-' + this._includeNumbers;
        // this.renderer.setElementStyle(this.el, 'backgroundColor', 'red');
        this.renderer.setElementAttribute(this.el, 'value', passwordValue);
    }
}