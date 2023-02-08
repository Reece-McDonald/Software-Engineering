import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ga1ors';

  login() {
    /* you can put if conditionals to see if someone has typed in one box or another */
    window.alert('Please enter your UF email or Password!');
  }

}
