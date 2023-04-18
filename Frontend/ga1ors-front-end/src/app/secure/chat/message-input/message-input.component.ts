import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css', './../chat.component.css']
})
export class MessageInputComponent implements OnInit, AfterViewInit {
  userId: number = 0;
  messageForm!: FormGroup;

  @ViewChild('loggedin') input!: HTMLInputElement;

  @Output() newMessageCreated = new EventEmitter<boolean>;
  @Output() alreadyPosted = new EventEmitter<boolean>;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.messageForm = this.formBuilder.group({
      messagePost: ''
    });

    this.authService.user().subscribe(
      user => this.userId = user.id
    );
  }

  ngAfterViewInit(): void {
    this.authService.user().subscribe(
      user => this.userId = user.id
    );
  }

  submit(): void {
    if (this.checkIfLoggedIn()) {
      if (this.messageForm.valid) {
        this.authService.createMessage(this.messageForm.getRawValue()).subscribe(
          res => {
            console.log(res);
            this.newMessageCreated.emit(true);
          },
          () =>
            this.toastr.error('You have already posted today.', 'Error',
              {
                timeOut: 3000,
              })
        );
      }
      else {
        this.toastr.error('You must input a message.', 'Error',
          {
          timeOut: 3000,
        });
      }
    }
    else {
      this.toastr.error('You must be logged-in to post.', 'Error',
        {
          timeOut: 3000,
        });
    }
  }

  checkIfLoggedIn(): boolean {
    return this.userId > 0;
  }
}
