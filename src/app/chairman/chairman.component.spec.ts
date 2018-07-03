import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chairman } from './chairman.component';

describe('Chairman', () => {
  let component: Chairman;
  let fixture: ComponentFixture<Chairman>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chairman ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chairman);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
