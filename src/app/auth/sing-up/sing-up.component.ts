import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from "@angular/forms"
import { equalPasswords } from './validators';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-sing-up',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './sing-up.component.html',
  styles: ``
})
export class SingUpComponent {

  form = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)]
    }),

    passwords: new FormGroup({
      password1: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)]
      }),
      password2: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6)]
      })
    }, {validators: [equalPasswords]}),

    email: new FormControl('', {
      validators: [Validators.email, Validators.minLength(6)]
    })
  })

  onSubmit(): void {
    console.log(this.form.controls)
  }

  formControlIsValid(control: FormControl) {
    return control.touched && control.dirty && control.invalid
  }

  getErrors(controlName: string): string[] {
    const control = this.form.get(controlName)
    if (!control || !control.errors) return []

    return Object.keys(control.errors).map(key => {
      switch (key) {
        case 'required':
          return `${controlName} is required`;
        case 'minlength':
          return `${controlName} length is lower than 6`
        default:
          return `Invalid ${controlName}`
      }
    })
  }
}
