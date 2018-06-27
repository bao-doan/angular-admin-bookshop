import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit {
  user_email:string;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.user_email = JSON.parse(localStorage.getItem('currentUser')).email;
  }
  onLogout() {
    this.authService.logout();
  }
}
