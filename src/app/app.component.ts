import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WordDetails, WordapiService } from './services/wordapi.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  wordapiService = inject(WordapiService);
  word = '';

  wordData?: WordDetails;

  getWord() {
    this.wordapiService.getWord(this.word).subscribe({
      next: (data) => {
      this.wordData = data;
      
    },
    error: (err) => {
      console.error(err);
    },
    });
  }
}
