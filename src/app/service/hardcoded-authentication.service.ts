import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  // Authenticate user
  authenticate(username: string, password: string): boolean {
    if (username === 'nkdey14' && password === 'test@123') {
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }

    return false;
  }

  // Check if user is logged in
  isUserLoggedIn(): boolean {
    let user = sessionStorage.getItem('authenticatedUser');
    return user !== null;
  }
}
