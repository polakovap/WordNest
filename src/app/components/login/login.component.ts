import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

//imports for routing
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginSuccessful: boolean = false;
  loginMessage: string = '';


  constructor(private authService: AuthService) { }

  login(username: string, password: string): void {
    this.authService.login(username, password).subscribe(
      response => {
        // Successful login
        this.loginSuccessful = true;
        this.loginMessage = "Login successful.";
      },
      error => {
        // Handle login error
        console.error(error);
        this.loginSuccessful = false;
        this.loginMessage = "Login failed. Please try again.";
      }
    );
  }
}
