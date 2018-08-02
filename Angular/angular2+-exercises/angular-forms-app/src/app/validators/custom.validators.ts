import { FormControl } from '@angular/forms';

export class CustomValidators {
    static passwordsMatch(control: FormControl) {
        let password = control.get('password').value;
        let password2 = control.get('password2').value;
        if (password !== password2) {
            control.get('password2').setErrors({ 'noMatch': true })
        } else {
            return null;
        }
    }
}
