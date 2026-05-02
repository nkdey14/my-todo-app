import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  // Dependency Injection is a design pattern in which a class receives its dependencies from external sources rather than creating them itself. In Angular, this is typically done through the constructor of a component or service. By injecting the Router service, we can use it to navigate to different routes in our application, such as the welcome page after a successful login.
  constructor(private router: Router) {}

  handleLogin() {
    if (this.username === 'nkdey14' && this.password === 'test@123') {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]); // Navigate to the welcome page on successful login
    } else {
      this.invalidLogin = true;
    }
  }
}
