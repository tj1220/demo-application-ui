import { AbstractControl, ValidationErrors } from "@angular/forms"

export const PasswordStrengthValidator = (control: AbstractControl): ValidationErrors | null => {

  let value: string = control.value || '';

  if (!value) {
    return { passwordStrength: `Password field is required.` };
  }

  let upperCaseCharacters = /[A-Z]+/g
  if (upperCaseCharacters.test(value) === false) {
    return { passwordStrength: `Password should have at least one upper case letter.` };
  }

  let lowerCaseCharacters = /[a-z]+/g
  if (lowerCaseCharacters.test(value) === false) {
    return { passwordStrength: `Password should have at least one lower case letter.` };
  }


  let numberCharacters = /[0-9]+/g
  if (numberCharacters.test(value) === false) {
    return { passwordStrength: `Password should have at least a number.` };
  }

  let specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/
  if (specialCharacters.test(value) === false) {
    return { passwordStrength: `Password should have at least one special character` };
  }

  if (value.length < 8) {
    return { passwordStrength: `Password should have at least 8 characters in length.` };
  }
  return null;
}
