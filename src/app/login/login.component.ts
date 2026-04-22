import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = 'nkdey14';
  password = '';

  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  handleLogin() {
    if (this.username === 'nkdey14' && this.password === 'test@123') {
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
