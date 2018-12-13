import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarComponent } from './progress-bar.component';

fdescribe('ProgressBarComponent', () => {
  let component: ProgressBarComponent;
  let fixture: ComponentFixture<ProgressBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set start value at 0', () => {
    expect(component.value).toEqual(0);
  });

  it('should toggle running flag when starting', () => {
    expect(component.running).toBeFalsy();
    component.start();
    expect(component.running).toBeTruthy();
  });

  it('should toggle running flag when stopping', () => {
    component.start();
    expect(component.running).toBeTruthy();
    component.end();
    expect(component.running).toBeFalsy();
  });

  it('should stop counting when stopping', (done) => {
    component.start();
    
    const subs = component.interval$.subscribe(
      value => {},
      error => {},
      () => { 
        //expect(subs).toBeFalsy();
        done();
      }
    );

    component.end();

    

  });

});
