import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    // ,
    // 'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser')).token}`
  })
};

@Injectable()
export class AuthService {
  private loginUrl = 'http://green-web-ecommerce.herokuapp.com/v1/users/login';
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(username: string, password: string) {
    return this.http.post<any>(this.loginUrl, { email: username, password: password })
      .pipe(map((res: any) => {
        // login successful if there's a jwt token in the response
        if (res && res.token) {
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify({ email: username, token: res.token }));
        }
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    // navigate to login component
    // this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}