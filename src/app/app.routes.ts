import { Routes } from '@angular/router';
//import the components to populate routes
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { SynonymComponent } from './components/synonym/synonym.component';
import { RhymeComponent } from './components/rhyme/rhyme.component';

//declare routes
export const routes: Routes = [
    {path:'', component:FlashcardComponent},
    {path: 'synonyms', component:SynonymComponent},
    {path:'rhymes', component:RhymeComponent}
];
