import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

//imports for routing
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  registrationSuccessful: boolean = false;
  registrationMessage: string = '';

  constructor(private authService: AuthService) { }

  register(): void {
    this.authService.register(this.username, this.email, this.password)
      .subscribe(
        response => {
          this.registrationSuccessful = true;
          this.registrationMessage = "Registration successful. You can now login.";
      },
      error => {
        // Handle registration error
        console.error(error);
        this.registrationSuccessful = false;
        this.registrationMessage = "Registration failed. Please try again.";
      }
    );
  }
}
