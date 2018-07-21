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
      },
      {
        "title": "Choir Practice",
        "start": "2018-06-05"
      },
      {
        "title": "Choir Practice",
        "start": "2018-06-12"
      },
      {
        "title": "Choir Practice",
        "start": "2018-06-19"
      },
      {
        "title": "Choir Practice",
        "start": "2018-06-26"
      },
      {
        "title": "Choir Practice",
        "start": "2018-07-03"
      },
      {
        "title": "July Summer",
        "start": "2018-07-07"
      },
      {
        "title": "Super Concert",
        "start": "2018-07-07"
      },
      {
        "title": "Choir Practice",
        "start": "2018-07-10"
      },
      {
        "title": "Choir Practice",
        "start": "2018-07-17"
      },
      {
        "title": "Choir Practice",
        "start": "2018-09-04"
      },
      {
        "title": "Sep AGM",
        "start": "2018-09-11"
      },
      {
        "title": "Choir Practice",
        "start": "2018-09-18"
      },
      {
        "title": "Choir Practice",
        "start": "2018-09-25"
      },
      {
        "title": "Choir Practice",
        "start": "2018-10-02"
      },
      {
        "title": "Choir Practice",
        "start": "2018-10-13"
      },
      {
        "title": "Fulston 1pm - 5pm",
        "start": "2018-10-13"
      },
      {
        "title": "Choir Practice",
        "start": "2018-10-09"
      },
      {
        "title": "Choir Practice",
        "start": "2018-10-16"
      },
      {
        "title": "Choir Practice",
        "start": "2018-10-21"
      },
      {
        "title": "Fulston 1pm - 5pm",
        "start": "2018-10-21"
      },
      {
        "title": "Choir Practice",
        "start": "2018-10-23"
      },
      {
        "title": "Venue not booked",
        "start": "2018-10-23"
      },
      {
        "title": "Choir Practice",
        "start": "2018-10-30"
      },
      {
        "title": "Choir Practice",
        "start": "2018-11-06"
      },
      {
        "title": "Commemorative",
        "start": "2018-11-10"
      },
      {
        "title": "Concert",
        "start": "2018-11-10"
      },
      {
        "title": "Swallows 7:30pm",
        "start": "2018-11-10"
      },
      {
        "title": "Choir Practice",
        "start": "2018-11-13"
      },
      {
        "title": "Choir Practice",
        "start": "2018-11-20"
      },
      {
        "title": "Choir Practice",
        "start": "2018-11-27"
      },
      {
        "title": "Choir Practice",
        "start": "2018-12-04"
      },
      {
        "title": "Christmas Concert",
        "start": "2018-12-08"
      }
    ];
  }

}
