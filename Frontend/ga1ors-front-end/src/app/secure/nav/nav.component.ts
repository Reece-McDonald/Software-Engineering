import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {User} from "../../interfaces/user";
import {Auth} from "../../classes/auth";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', './../secure.component.css']
})
export class NavComponent implements OnInit {
  user!: User;

  constructor(private authService: AuthService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    Auth.userEmitter.subscribe(user => this.user = user);
  }

  logout(): void {
    this.authService.logout().subscribe(() => {
      this.toastr.success('Successfully logged out.', 'Success',
        {
          timeOut: 3000,
        });
    });
  }
}
