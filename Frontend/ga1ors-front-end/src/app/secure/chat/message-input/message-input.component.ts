import {AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";

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

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
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
          error => window.alert("Only 1 message.")
        );
      }
      else {
        window.alert("Message input can't be empty");
      }
    }
    else {
      window.alert("Must be logged in.");
    }
  }

  checkIfLoggedIn(): boolean {
    return this.userId > 0;
  }
}
