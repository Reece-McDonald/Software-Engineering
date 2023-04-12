import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.css', './../chat.component.css']
})
export class MessageInputComponent implements OnInit {
  messageForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.messageForm = this.formBuilder.group({
      messagePost: ''
    });
  }

  submit(): void {
    this.authService.createMessage(this.messageForm.getRawValue()).subscribe(
      res => console.log(res),
      error => window.alert(error)
    );
  }
}
