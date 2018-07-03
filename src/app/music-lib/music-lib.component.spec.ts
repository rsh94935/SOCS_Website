import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicLib } from './music-lib.component';

describe('MusicLib', () => {
  let component: MusicLib;
  let fixture: ComponentFixture<MusicLib>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicLib ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicLib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
