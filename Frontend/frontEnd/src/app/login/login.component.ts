import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'Ga1ors';
  /*email:string;
  password:string; */

  login() {
    /* you can put if conditionals to see if someone has typed in one box or another */
    window.alert('Please enter your UF email or Password!');
  }

  constructor(){}

  ngOnInit(): void {
    
  }
}
