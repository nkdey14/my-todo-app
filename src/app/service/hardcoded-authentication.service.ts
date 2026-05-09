import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodedAuthenticationService {
  constructor() {}

  // This method checks if the provided username and password match the hardcoded credentials.
  // If they do, it returns true, indicating a successful authentication; otherwise, it returns false.
  authenticate(username: string, password: string): boolean {
    if (username === 'nkdey14' && password === 'test@123') {
      return true;
    }

    return false;
  }
}
