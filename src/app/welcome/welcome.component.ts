import { Component } from '@angular/core';
//import { HelloComponent } from '../hello/hello.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  message = 'welcome';

  display() {
    console.log(this.message);
  }
}
