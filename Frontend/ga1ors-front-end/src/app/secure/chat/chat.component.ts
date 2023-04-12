import {AfterViewChecked, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Message} from "../../interfaces/message";
import {MessageService} from "../../services/message.service";
import {Auth} from "../../classes/auth";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, AfterViewChecked {
  userId!: number;
  messageForm!: FormGroup;
  allMessages: Message[] = [];

  @ViewChild('scrollContainer') private scrollContainer!: ElementRef;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {
    Auth.userEmitter.subscribe(
      user => {
        this.userId = user.id;
        this.getAllMessages();
      });

    this.messageForm = this.formBuilder.group({
      messagePost: ''
    });


  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  submit(): void {
    if (this.messageForm.valid) {
      this.authService.createMessage(this.messageForm.getRawValue()).subscribe(
        res => {
          console.log(res);
          this.getAllMessages();
        },
        error => window.alert(error)
      );
    }
    else {
      window.alert("Message input can't be empty");
    }
  }

  getAllMessages(): void {
    console.log(this.userId);

    this.messageService.all().subscribe( // TODO: Once a certain amount of posts have been added, do not add anymore.
      (res: any) => {
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
