import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  private _http: HttpClient;
  private _siteURL = 'http://localhost:3000';
  
  constructor(private http: HttpClient) {
    this._http = http;
  }
}
