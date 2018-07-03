import { Component } from '@angular/core';
import { EmailService, IMessage } from './email.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'welcome';
  message: IMessage = {};

  constructor(private emailService: EmailService) {
 
  }

  modalActive() {
    document.getElementById('emailUs').style.display='block';
    this.message.toEmail = "socs.webmail@gmail.com";
  }
 
  sendEmail(message: IMessage) {
    this.emailService.sendEmail(message).subscribe(res => {
    }, error => {
    })
  }
}
