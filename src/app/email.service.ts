import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

export interface IMessage {
  name?: string,
  email?: string,
  message?: string,
  toEmail?: string,
  subject?: string
}

@Injectable()
export class EmailService {
  private emailUrl = './assets/scripts/email.php';
 
  constructor(private http: Http) {
 
  }
 
  sendEmail(message: IMessage): Observable<IMessage> | any {
    return this.http.post(this.emailUrl, message)
      .map(response => {
        alert("Email has been sent, thank you for your message.");
        return response;
      })
      .catch(error => {
        alert("Email has not been sent, please try again.");
        return Observable.throw(error)
      })
  }
}
