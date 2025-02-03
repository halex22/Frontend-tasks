import {AbstractControl} from "@angular/forms"


export function equalPasswords(control: AbstractControl) {
  const pass1 = control.get('password1')?.value
  const pass2 = control.get('password2')?.value

  return pass1 === pass2 ? null : {passwordNotEqual: true}
}