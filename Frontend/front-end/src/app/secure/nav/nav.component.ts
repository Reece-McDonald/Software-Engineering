import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input('user') user: User | undefined;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      console.log("Successfully logged out");
    });
  }
}
