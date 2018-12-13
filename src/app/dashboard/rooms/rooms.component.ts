import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../classes/room';
import { environment } from 'src/environments/environment';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {

  rooms: Room[];
  roomNameControl = new FormControl("", Validators.required);
  currentRoom: Room;

  constructor(private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit() {
    this.getRooms();
  }

  createRoom(): void {

    if(this.currentRoom) {
      this.http.put(environment.apiUrl + 'rooms/' + this.currentRoom.id, {name : this.roomNameControl.value})
      .subscribe(
        value => {
          this.currentRoom = null;
          this.roomNameControl.reset();
          this.getRooms();}
        )
        
    } else {
      this.http.post(environment.apiUrl + 'rooms', {name : this.roomNameControl.value})
      .subscribe(
        value => {
          console.log({value});
          this.getRooms();}
        )
    }
    
  }

  private getRooms() {
    this.http.get<Room[]>(environment.apiUrl + 'rooms')
      .subscribe(rooms => this.rooms = rooms);
  }

  edit(room: Room): void {
    this.currentRoom = room;
    this.roomNameControl.patchValue(room.name);
  }

  delete(room: Room) : void {
    this.http.delete(environment.apiUrl + 'rooms/' + room.id ).subscribe(
      value => {
        this.getRooms();
      });
  }

}
