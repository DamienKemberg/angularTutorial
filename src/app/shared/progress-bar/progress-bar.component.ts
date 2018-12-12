import { Component, OnInit, Input } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { skip, take, map, filter, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() value = 0;
  @Input() max = 100;
  @Input() inter = 1000;

  running = false;

  constructor() { }

  ngOnInit() {
  }

  get interval$() {
    return interval(this.inter)
    .pipe(
      take(this.max + 1),
      takeWhile(value => this.running)
    );
  } 

  start() : void {
    this.running = true;
    this.interval$.subscribe(
      value => {
        this.value = value;
      },
      error => {},
      () => console.log('complete')
    );
  }

  end() : void {
    this.running = false;
  }
  

}
