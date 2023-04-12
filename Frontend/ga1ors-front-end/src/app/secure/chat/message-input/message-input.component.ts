import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css', './../chat.component.css']
})
export class MessageInputComponent implements OnInit {
  messageForm!: FormGroup;

  @Output() newMessageCreated = new EventEmitter<boolean>;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.messageForm = this.formBuilder.group({
      messagePost: ''
    });
  }

  submit(): void {
    if (this.messageForm.valid) {
      this.authService.createMessage(this.messageForm.getRawValue()).subscribe(
        res => {
          console.log(res);
          this.newMessageCreated.emit(true);
        },
        error => window.alert(error)
      );
    }
    else {
      window.alert("Message input can't be empty");
    }
  }

}
