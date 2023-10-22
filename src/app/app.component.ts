import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputData: string = '';
  shouldGray: boolean = true;

  isLessEight:boolean=false;
  isPasswordWeak: boolean = false;
  isPasswordMedium: boolean = false;
  isPasswordStrong: boolean = false;

  handleInputChange(value: string) {
    function isPasswordStrong(input: string): number {
      if (input.length < 8) {
        return 0;
      }
      var n = 0;
      var letterPattern = /[a-zA-Z]/;
      var digitPattern = /\d/;
      var specialCharPattern = /[!@#\$%\^&\*()_+\{\[\]:;<>,\.\?~\\-]/i;

      if (letterPattern.test(input)) {
        n++;
      }
      if (digitPattern.test(input)) {
        n++;
      }
      if (specialCharPattern.test(input)) {
        n++;
      }
      return n;
    }

    const passwordStrength = isPasswordStrong(value);

    if (passwordStrength === 0) {
      this.isLessEight=true;
      this.isPasswordWeak = false;
      this.isPasswordMedium = false;
      this.isPasswordStrong = false;
    } else if (passwordStrength === 1) {
      this.isLessEight=false;
      this.isPasswordWeak = true;
      this.isPasswordMedium = false;
      this.isPasswordStrong = false;
    } else if (passwordStrength === 2) {
      this.isLessEight=false;
      this.isPasswordWeak = false;
      this.isPasswordMedium = true;
      this.isPasswordStrong = false;
    } else if (passwordStrength === 3) {
      this.isLessEight=false;
      this.isPasswordWeak = false;
      this.isPasswordMedium = false;
      this.isPasswordStrong = true;
    } else {
      this.isLessEight=false;
      this.isPasswordWeak = false;
      this.isPasswordMedium = false;
      this.isPasswordStrong = false;
    }
  }
}
