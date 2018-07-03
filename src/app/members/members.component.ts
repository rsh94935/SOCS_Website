import { Component, OnInit } from '@angular/core';
import {ScheduleModule} from 'primeng/schedule';

import 'fullcalendar';
import 'jquery';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  events: any[];
  constructor() { }

  ngOnInit() {
    this.events = [
      {
        "title": "Choir Practice",
        "start": "2018-03-27"
      },
      {
        "title": "Easter Break",
        "start": "2018-04-03"
      },
      {
        "title": "Methodist church",
        "start": "2018-04-10"
      },
      {
        "title": "Choir Practice",
        "start": "2018-04-17"
      },
      {
        "title": "Highsted Concert",
        "start": "2018-04-21"
      },
      {
        "title": "Choir Practice",
        "start": "2018-04-24"
      },
      {
        "title": "Choir Practice",
        "start": "2018-05-01"
      },
      {
        "title": "Choir Practice",
        "start": "2018-05-08"
      },
      {
        "title": "Choir Practice",
        "start": "2018-05-15"
      },
      {
        "title": "Choir Practice",
        "start": "2018-05-22"
      },
      {
        "title": "May Half Term",
        "start": "2018-05-29"
      }
    ];
  }

}
