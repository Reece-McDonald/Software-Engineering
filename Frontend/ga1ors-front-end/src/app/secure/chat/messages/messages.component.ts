import {Component, OnInit} from '@angular/core';
import {MessageService} from "../../../services/message.service";
import {Message} from "../../../interfaces/message";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css', './../chat.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];

  constructor(private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.messageService.all().subscribe( // TODO: Once a certain amount of posts have been added, do not add anymore.
      (res: any) => {
        this.messages = res.data;
      }
    );
  }
}
