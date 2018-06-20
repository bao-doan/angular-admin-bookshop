import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../view-models/user';
import { Users } from '../view-models/users';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  componentTitle: string = 'Dashboard';
  user_email:string;
  users: Users = new Users(new User());
  // user: User = this.users.user;
  // person:string = this.users.first;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    this.user_email = JSON.parse(localStorage.currentUser).email.toString();
    if(this.users.user.first == null) {
      alert('null');
    }
  }
  getUsers(): void {
    this.userService.getUsers().subscribe(_ => this.users = _)
    // (_ => console.log(_))
  }
  
}
