import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent {
  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
  ) {}

  ngOnInit() {
    this.hardcodedAuthenticationService.logout();
  }
}
