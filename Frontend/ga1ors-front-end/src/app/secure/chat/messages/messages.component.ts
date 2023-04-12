import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css', './../chat.component.css']
})
export class MessagesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  // getMessages() {
  //   console.log('Loading all messages');
  //
  //   this.messageService.all().subscribe( // TODO: Once a certain amount of posts have been added, do not add anymore.
  //     (res: any) => {
  //       this.allMessages = res.data;
  //     }
  //   );
  // }
  //
  // load(): void {
  //   console.log('load called!')
  //   this.allMessages = [...this.allMessages];
  // }
}
