import { Component } from '@angular/core';
import { FormControl, FormGroup ,Validators, ReactiveFormsModule } from '@angular/forms'


@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styles: ``
})
export class LogInComponent {

  form = new FormGroup({
    username: new FormControl('', {
      validators: [Validators.required]
    }),
    password: new FormControl('', {
      validators: [Validators.required]
    })
  })

  formControlIsValid(control: FormControl) {
    return control.touched && control.dirty && control.invalid
  }

  onSubmit():void {
    console.log('submitted')
  }
}
