import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username = '';
  password = '';

  errorMessage = 'Invalid Credentials';
  invalidLogin = false;

  // Dependency Injection is a design pattern in which a class receives its dependencies from external sources rather than creating them itself. In Angular, this is typically done through the constructor of a component or service. By injecting the Router service, we can use it to navigate to different routes in our application, such as the welcome page after a successful login.
  // By injecting the HardcodedAuthenticationService, we can use it to authenticate the user's credentials when they attempt to log in.
  // This allows us to separate the authentication logic from the component, making our code more modular and easier to maintain.
  constructor(
    private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
  ) {}

  handleLogin() {
    if (
      this.hardcodedAuthenticationService.authenticate(
        this.username,
        this.password,
      )
    ) {
      this.invalidLogin = false;
      this.router.navigate(['welcome', this.username]); // Navigate to the welcome page on successful login
    } else {
      this.invalidLogin = true;
      this.password = ''; // Clears the password field on failed login attempt
    }
  }
}
