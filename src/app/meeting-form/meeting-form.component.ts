import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-meeting-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
      <h2>Schedule Meeting</h2>
      <form (ngSubmit)="onSubmit()">
        <div class="form-group">
          <label for="topic">Topic</label>
          <input
            type="text"
            id="topic"
            name="topic"
            [(ngModel)]="meeting.topic"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="date">Date</label>
          <input
            type="date"
            id="date"
            name="date"
            [(ngModel)]="meeting.date"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="time">Time</label>
          <input
            type="time"
            id="time"
            name="time"
            [(ngModel)]="meeting.time"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <label for="participants">Number of Participants</label>
          <input
            type="number"
            id="participants"
            name="participants"
            [(ngModel)]="meeting.participants"
            class="form-control"
            required
          />
        </div>
        <button type="submit" class="btn">Schedule Meeting</button>
      </form>
    </div>
  `
})
export class MeetingFormComponent {
  meeting = {
    topic: '',
    date: '',
    time: '',
    participants: 0
  };

  constructor(private router: Router) {}

  onSubmit() {
    // Add meeting scheduling logic here
    this.router.navigate(['/dashboard']);
  }
}