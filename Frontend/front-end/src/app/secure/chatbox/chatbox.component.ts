import {Component} from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent {
  messages: string[]

  chatMessage = this.formBuilder.group({
    message: ''
  });

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.messages = []
  }

  submit(): void {
    this.messages.push(<string>this.chatMessage.getRawValue().message);
  }

  clear(): void {
    this.messages.splice(0);
  }
}
