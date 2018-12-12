import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import {Validators, FormBuilder, FormGroup, AbstractControl, ValidatorFn} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private userService : UserService, private fb : FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  login() {
    this.userService.login({email: "test", password: "test"});
  }

  

}
