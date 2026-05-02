import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { HelloComponent } from '../hello/hello.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent {
  message = 'welcome';
  name = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }
}
