import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SynonymapiService, Synonyms } from '../../services/synonymapi.service';

@Component({
  selector: 'app-synonym',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './synonym.component.html',
  styleUrl: './synonym.component.css'
})
export class SynonymComponent {
  synonymapiService = inject(SynonymapiService);
  
  word?: string;
  wordData?:Synonyms;
  errorMessage?: string;

  getSynonyms() {
    this.errorMessage = ''; // Reset error message
    this.synonymapiService.getSynonyms(this.word).subscribe({
      next: (data) => {
      this.wordData = data;
    },
    error: (err) => {
      console.error(err);
      this.errorMessage = 'Sorry, no matches found :(';
    },
    });
  }

  clearInput(){
    this.word=''; 
  }

}
