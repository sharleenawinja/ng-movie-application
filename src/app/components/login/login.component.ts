import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  login() {
    if (this.username.trim().length === 0) {
      this.errorMessage = 'Username is required';
    } else if (this.password.trim().length === 0) {
      this.errorMessage = 'Password is required';
    } else {
      this.errorMessage = '';
    }
  }
}
