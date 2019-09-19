import { FormGroup, FormControl } from '@angular/forms';

export default class FormUtils {
    
    static markAsTouched(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach(field => {
            const control = formGroup.get(field);
            if (control instanceof FormControl) {
                control.markAsDirty({ onlySelf: true });
            } else if (control instanceof FormGroup) {
                this.markAsTouched(control);
            }
        });
    }

    static isFieldValid(field: FormControl) {
        return field?(!field.valid && field.dirty):false;
    }

    static isErrorExists(field: FormControl, errorType: string) {
        return field?((!field.valid ? (field.errors[errorType]) : false) && field.dirty):false;
    }
}