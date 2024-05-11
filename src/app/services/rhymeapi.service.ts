import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

//create interface for rhymes
export interface Rhymes
{
  word: string;
  rhymes: {
    all: string[];
  };
}
@Injectable({
  providedIn: 'root'
})
export class RhymeapiService {
  private http = inject(HttpClient);
  constructor() { }

  getRhymes(word?: string) {
    return this.http.get<Rhymes>('https://wordsapiv1.p.rapidapi.com/words/' + `${word}/rhymes`, {
      headers:{
        'X-RapidAPI-Key': '51a1018237mshbc5f8a742974c3fp174f73jsn069fd4b5466e',
		    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    })
  }
}
