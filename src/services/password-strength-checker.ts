export function isPasswordStrong(input: string): number {
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
  