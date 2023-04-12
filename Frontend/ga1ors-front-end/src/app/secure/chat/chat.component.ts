import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DisplayMessagesComponent} from "./display-messages/display-messages.component";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewInit {
  @ViewChild(DisplayMessagesComponent) displayMessages!: DisplayMessagesComponent;

  constructor() {
  }

  ngOnInit(): void {
    this.displayMessages.getAllMessages();
  }

  ngAfterViewInit(): void {
    this.displayMessages.getAllMessages();
  }

  newMessageCreated($event: boolean) {
    if ($event) {
      this.displayMessages.getAllMessages();
    }
  }

}
