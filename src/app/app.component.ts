import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RandomWord, WordDetails, WordapiService } from './services/wordapi.service';
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
  
  word?: string;
  randomWord?: RandomWord;
  wordData?: WordDetails;

  ngOnInit(): void {
    this.getRandomWord();
  }

  getRandomWord() {
    this.wordapiService.getRandomWord().subscribe({
      next: (data) => {
        this.randomWord = data;
        this.word = this.randomWord.word;
        this.getWord();
      },
      error: (err) => {
        console.error(err);
      },
    })
  }


  getWord() {
    this.wordapiService.getWordDetails(this.word).subscribe({
      next: (data) => {
      this.wordData = data;
      
    },
    error: (err) => {
      console.error(err);
    },
    });
  }

  clearInput(){
    this.word=''; 
  }

}
