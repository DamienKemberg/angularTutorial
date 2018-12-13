import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarComponent } from './progress-bar.component';
import { Component, ViewChild } from '@angular/core';
import { start } from 'repl';

@Component({
  selector: 'test',
  template: "<app-progress-bar [value]='value' [max]='max' #progressBar></app-progress-bar>"
})

class TestComponent {
  value = 10;
  max = 100;

  @ViewChild('progressBar') progressBar: ProgressBarComponent;

  start() {
    this.progressBar.start();
  }

}

fdescribe('ProgressBarComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, ProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  

  it('should call start when clicking on start button', () => {
    const spy = spyOn(component.progressBar, 'start');

    const button = (fixture.nativeElement as HTMLElement).querySelector('button');
    button.click();

    expect(spy).toHaveBeenCalled();


  });

});
