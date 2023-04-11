import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (this.username.trim().length === 0) {
      this.errorMessage = 'Username is required';
    } else if (this.password.trim().length === 0) {
      this.errorMessage = 'Password is required';
    } else {
      this.errorMessage = '';
      let response = this.auth.login(this.username, this.password);
      if (response === 200) {
        this.router.navigate(['home']);
      }
      if (response === 403) {
        this.errorMessage = 'Invalid username or password';
      }
    }
  }
}
