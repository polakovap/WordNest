import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

//create interface for the word details data and export it
export interface WordDetails {
  word: string;
  results: {
    definition: string;
    partOfSpeech: string;
    synonyms: string[];
    typeOf: string[];
    antonyms: string[];
  }[];
  syllables: {
    count: number;
    list: string[];
  };
  pronunciation: {
    all: string;
  };
  frequency: number;
}

@Injectable({
  providedIn: 'root'
})
export class WordapiService {
  private http = inject(HttpClient);
  constructor() { }

  getWord(word?: string) {
    return this.http.get<WordDetails>('https://wordsapiv1.p.rapidapi.com/words/' + word, {
      headers:{
        'X-RapidAPI-Key': '51a1018237mshbc5f8a742974c3fp174f73jsn069fd4b5466e',
		    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    })
  }
}
