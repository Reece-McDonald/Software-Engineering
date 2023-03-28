import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {
  messageForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.messageForm = this.formBuilder.group({
      messagepost: ''
    });
  }

  submit(): void {
    this.authService.createMessage(this.messageForm.getRawValue()).subscribe(
      res => console.log(res)
    );
  }

  clear(): void {
    // this.messages.splice(0);
  }
}
