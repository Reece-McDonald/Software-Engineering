import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {Message} from "../../../interfaces/message";
import {AuthService} from "../../../services/auth.service";
import {MessageService} from "../../../services/message.service";

@Component({
  selector: 'app-display-messages',
  templateUrl: './display-messages.component.html',
  styleUrls: ['./display-messages.component.css', './../chat.component.css']
})
export class DisplayMessagesComponent implements OnInit, AfterViewChecked {
  userId!: number;
  allMessages: Message[] = [];

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    this.getAllMessages();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  getAllMessages(): void {
    this.messageService.all().subscribe( // TODO: Once a certain amount of posts have been added, do not add anymore.
      (res: any) => {
        this.authService.user().subscribe(
          user => this.userId = user.id
        );
        this.allMessages = res.data;
      }
    );

    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.scrollContainer.nativeElement.scrollTop = this.scrollContainer.nativeElement.scrollHeight;
    } catch (err) {
    }
  }
}
