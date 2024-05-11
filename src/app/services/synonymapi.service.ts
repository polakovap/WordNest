import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

//create interface for synonyms
export interface Synonyms
{
  word: string;
  synonyms: string[];
}

@Injectable({
  providedIn: 'root'
})
export class SynonymapiService {
  private http = inject(HttpClient);
  constructor() { }

  getSynonyms(word?: string) {
    return this.http.get<Synonyms>('https://wordsapiv1.p.rapidapi.com/words/' + `${word}/synonyms`, {
      headers:{
        'X-RapidAPI-Key': '51a1018237mshbc5f8a742974c3fp174f73jsn069fd4b5466e',
		    'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
      }
    })
  }

}
