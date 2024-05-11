import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';

//imports for routing
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
    // Check authentication status on component initialization
    this.checkAuthentication();
  }

  checkAuthentication(): void {
    // Check if the user is authenticated
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  logout(): void {
    // Call AuthService method to logout the user
    this.authService.logout();
    // Update isLoggedIn status
    this.isLoggedIn = false;
  }
}
