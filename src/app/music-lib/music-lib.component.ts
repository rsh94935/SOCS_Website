import { Component, OnInit } from '@angular/core';
import { Songs } from './musicSongs.component';
import {DataTableModule} from 'primeng/datatable';
import { DataTable} from 'primeng/datatable';
import { EmailService, IMessage } from '../email.service';

@Component({
  selector: 'musicLib',
  templateUrl: './music-lib.component.html',
  styleUrls: ['./music-lib.component.css']
})
export class MusicLib implements OnInit {
  message: IMessage = {};

  constructor(private emailService: EmailService) {

  }

  songList = Songs;

  modalActiveMusicHire(){
    document.getElementById('emailMusicHire').style.display='block';
    this.message.toEmail = "socs.musichire@gmail.com";
  }
 
  sendEmail(message: IMessage) {
    this.emailService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })
  }

  ngOnInit() {
  }

}
