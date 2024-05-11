import { Routes } from '@angular/router';
//import the components to populate routes
import { FlashcardComponent } from './components/flashcard/flashcard.component';
import { SynonymComponent } from './components/synonym/synonym.component';
import { RhymeComponent } from './components/rhyme/rhyme.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
//declare routes
export const routes: Routes = [
    {path:'', component:FlashcardComponent},
    {path: 'synonyms', component:SynonymComponent},
    {path:'rhymes', component:RhymeComponent},
    {path:'user', component:UserComponent},
    {path:'login', component:LoginComponent},
    {path:'register', component:RegisterComponent}
];
