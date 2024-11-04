import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="container">
      <h2>Welcome to Dashboard</h2>
      <div class="actions">
        <a routerLink="/meeting" class="btn">Schedule New Meeting</a>
      </div>
      <div class="meetings-list">
        <h3>Upcoming Meetings</h3>
        <div *ngFor="let meeting of meetings" class="meeting-card">
          <h4>{{ meeting.topic }}</h4>
          <p>Date: {{ meeting.date | date }}</p>
          <p>Time: {{ meeting.time }}</p>
          <p>Participants: {{ meeting.participants }}</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .meetings-list {
      margin-top: 2rem;
    }
    .meeting-card {
      background: #f8f9fa;
      padding: 1rem;
      margin-bottom: 1rem;
      border-radius: 4px;
    }
  `]
})
export class DashboardComponent {
  meetings = [
    {
      topic: 'Project Review',
      date: new Date(),
      time: '10:00 AM',
      participants: 5
    }
  ];
}