import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = true
  userName: string | null = null
  private httpClient = inject(HttpClient)

  logInUser(username: string, password: string) {
    this.httpClient.post(
      'localhost:8080/api/v1/auth/log-in',
      {} // to be replaced with actual body
    )
  }
}
