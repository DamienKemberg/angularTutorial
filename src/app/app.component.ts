import { Component } from '@angular/core';
import { UserService } from './user/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pokerplanning';


  constructor(private userService : UserService) {}

  isLogged() : boolean {
    return this.userService.connection$;
  }


}
