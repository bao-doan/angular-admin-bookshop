import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  loginAdminForm: FormGroup;
  private formSubmitAttempt: boolean;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginAdminForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // reset login status
    // this.authService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    //test purpose
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginAdminForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginAdminForm.invalid) {
      return;
    }
    this.isLoggedIn();



    // this.onCheckRemember();
  }
  // For toggle Show or Hide password input
  show: string = "password";
  value: number = 0;
  onToggle(): void {
    if (this.value % 2 == 1) {
      this.show = "password";
      this.value = 0;
    } else {
      this.show = "text";
      this.value = 1;
    }
  }
  //For Remember password
  remember: boolean = false;
  onCheckRemember(): void {
    // console.log(this.remember);
    let sessionuser = sessionStorage.getItem('currentUser').toString();
    if (this.remember == false) {
      // window.onunload = function() {localStorage.removeItem('currentUser')};
    } else {
      localStorage.setItem('currentUser2', `${sessionuser}`);
    }
  }
  isLoggedIn(): void {
    let currentuser = JSON.parse(localStorage.getItem('currentUser'));
    let confirmPopup = window.confirm(`You must logout before logging in as an another User\nDo you want to logout now?`);
    if (currentuser && currentuser.token) {
      // store username and jwt token in local storage to keep user logged in between page refreshes
      console.log(`Already logged in, User: ${currentuser.email} | Token: ${currentuser.token}`);
      // alert(`You must logout before logging in as an another User`)
      // return (valueOf(confirmPopup) == true)? this.authService.logout()
      if (confirmPopup == true) {
        this.authService.logout();
        alert('You are logged out');
      } else {}
    } else {
      console.log('No user logged in, ready to log in now');
      this.onLogin();
    }
  }
  onLogin(): void {
    this.loading = true;
    this.authService.login(this.f.username.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
    // if (sessionStorage.getItem('currentUser')) { 
    //   this.onCheckRemember(); 
    // } else {
    //   console.log('chua co sessionStorage');
    // }

  }

}