import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  messageForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.messageForm = this.formBuilder.group({
      messagePost: ''
    });
  }

  submit(): void {
    this.authService.createMessage(this.messageForm.getRawValue()).subscribe(
      res => console.log(res)
    );
  }
}
