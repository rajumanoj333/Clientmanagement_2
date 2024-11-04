import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  template: `
    <div class="app-container">
      <nav class="nav">
        <h1>Client Management System</h1>
      </nav>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .app-container {
      min-height: 100vh;
    }
    .nav {
      background: #007bff;
      color: white;
      padding: 1rem;
      text-align: center;
    }
  `]
})
export class AppComponent {}