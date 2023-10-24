import { AppComponent } from '../app/app.component'; 

export function updatePasswordStrength(
  component: AppComponent,
  passwordStrength: number
): void {
  component.isLessEight = false;
  component.isPasswordWeak = false;
  component.isPasswordMedium = false;
  component.isPasswordStrong = false;

  switch (passwordStrength) {
    case 0:
      component.isLessEight = true;
      break;
    case 1:
      component.isPasswordWeak = true;
      break;
    case 2:
      component.isPasswordMedium = true;
      break;
    case 3:
      component.isPasswordStrong = true;
      break;
    default:
      break;
  }
}
