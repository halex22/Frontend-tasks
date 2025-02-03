import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'

@Component({
  selector: 'div[formInput]',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styles: [`
    :host {
      @apply flex flex-col 
    }
    `],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements ControlValueAccessor {
  @Input({required:true}) identifier!: string
  @Input() type: 'password' | 'text' | "email" = 'text'
  @Input({required:false}) label?: string

  get getLabel() {
    return this.label ? this.label : this.identifier
  }

  get placeHolder() {
    if (this.type === 'password') return null

    return this.type === 'text' ? 'John Doe' : 'mail@example.com'
  }
  value: any = '';

  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.value = inputElement.value;
    this.onChange(this.value);
  }
}
