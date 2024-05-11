import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl= 'http://localhost:3000';
  
  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password });
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { username, email, password });
  }

  logout():void {
    // Clear token from local storage upon logout
    localStorage.removeItem('token');
  }

  // Method to save token in local storage
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Method to get token from local storage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Method to check if user is authenticated (token exists)
  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}
