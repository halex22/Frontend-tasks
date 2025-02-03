import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators, ReactiveFormsModule } from '@angular/forms'
import { InputComponent } from '../input/input.component';


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './log-in.component.html',
  styles: ``
})
export class LogInComponent {

  form = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6)]
    })
  })

  formControlIsValid(control: FormControl) {
    return control.touched && control.dirty && control.invalid
  }

  onSubmit():void {
    console.log('submitted')
  }
}
