import { Component, OnInit } from '@angular/core';
import {TutorialService} from 'src/app/services/tutorial.service'

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {

  constructor(private tutorialService: TutorialService) { }

  meeting = {
    name: ''
  };
  submitted = false;

  ngOnInit(): void {
  }

  saveMeeting(): void {
    const data = {
      name: this.meeting.name,
    };

    this.tutorialService.postMeeting(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newMeeting(): void {
    this.submitted = false;
    this.meeting = {
      name: ''
    };
  }

}
