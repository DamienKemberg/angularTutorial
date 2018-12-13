import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerError = "";

  registerForm: FormGroup;

  constructor(private fb :FormBuilder, private userService : UserService, private router : Router) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  register(): void {
    this.userService.register(this.registerForm.value).subscribe(
      () => {this.router.navigateByUrl("/user/login")},
      error => {this.registerError = error.status + "  " + error.message}
    );
  }

}
