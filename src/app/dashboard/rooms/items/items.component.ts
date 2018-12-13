import { Component, OnInit, OnDestroy } from '@angular/core';
import { Room } from '../../classes/room';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { switchMap, map } from 'rxjs/operators';
import { runInThisContext } from 'vm';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit, OnDestroy{

  room: Room;
  id: number;

  subs: Subscription;

  constructor(private route : ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {

    this.subs = this.route.paramMap
      .pipe(
        map(params => params.get("idRoom")),
        switchMap(id => this.http.get<Room>(environment.apiUrl + "rooms/" + id))
      ).subscribe(
        room => {
          this.room = room
        });
      
  }

  ngOnDestroy() {
    if(this.subs) {
      this.subs.unsubscribe();
    }
  }

}
