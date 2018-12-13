import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {Validators, FormBuilder, FormGroup, AbstractControl, ValidatorFn} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  registerError= "";

  constructor(private userService : UserService, private fb : FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.userService.login(this.loginForm.value).subscribe(
      () => {this.router.navigate(["dashboard", "rooms"])},
      error => {this.registerError = error.status + "  " + error.message}
    );
  }

  

}
