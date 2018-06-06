import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunProcessComponent } from './run-process.component';

describe('RunProcessComponent', () => {
  let component: RunProcessComponent;
  let fixture: ComponentFixture<RunProcessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunProcessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
