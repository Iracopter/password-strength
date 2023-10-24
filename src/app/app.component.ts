import { Component } from '@angular/core';
import { isPasswordStrong } from '../services/password-strength-checker';
import { updatePasswordStrength } from '../services/password-strength-updater';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: AppComponent,
      multi: true,
    },
  ],
})
export class AppComponent implements ControlValueAccessor {
  inputData: string = '';
  shouldGray: boolean = true;

  isLessEight: boolean = false;
  isPasswordWeak: boolean = false;
  isPasswordMedium: boolean = false;
  isPasswordStrong: boolean = false;

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.inputData = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  handleInputChange(value: string) {
    const passwordStrength = isPasswordStrong(value);
    updatePasswordStrength(this, passwordStrength);
    this.onChange(value); 
    this.onTouched(); 
  }
}
