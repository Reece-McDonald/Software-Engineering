import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Message} from "../../interfaces/message";
import {MessageService} from "../../services/message.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messageForm!: FormGroup;
  allMessages: Message[] = [];

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.messageForm = this.formBuilder.group({
      messagePost: ''
    });

    this.getAllMessages();
  }

  submit(): void {
    this.authService.createMessage(this.messageForm.getRawValue()).subscribe(
      res => {
        console.log(res);
        this.getAllMessages();
        this.reload();
      },
      error => window.alert(error)
    );
  }

  getAllMessages(): void {
    this.messageService.all().subscribe( // TODO: Once a certain amount of posts have been added, do not add anymore.
      (res: any) => {
        this.allMessages = res.data;
      }
    );
  }

  reload() : void {
    this.allMessages = [...this.allMessages];

    this.allMessages.forEach(function (value) {
      console.log(value.messagePost);
    })
  }

}
