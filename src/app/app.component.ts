import { Component } from '@angular/core';
import { isPasswordStrong } from '../services/password-strength-checker';
import { updatePasswordStrength } from '../services/password-strength-updater';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputData: string = '';
  shouldGray: boolean = true;

  isLessEight: boolean = false;
  isPasswordWeak: boolean = false;
  isPasswordMedium: boolean = false;
  isPasswordStrong: boolean = false;

  handleInputChange(value: string) {
    const passwordStrength = isPasswordStrong(value);
    updatePasswordStrength(this, passwordStrength);    
  }
}
