import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RhymeapiService, Rhymes } from '../../services/rhymeapi.service';

@Component({
  selector: 'app-rhyme',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './rhyme.component.html',
  styleUrl: './rhyme.component.css'
})
export class RhymeComponent {
  rhymeapiService = inject(RhymeapiService);
  
  word?: string;
  wordData?:Rhymes;
  errorMessage?: string;

  getRhymes() {
    this.errorMessage = ''; // Reset error message
    this.rhymeapiService.getRhymes(this.word).subscribe({
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

