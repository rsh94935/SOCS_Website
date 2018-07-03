import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicDirComponent } from './music-dir.component';

describe('MusicDirComponent', () => {
  let component: MusicDirComponent;
  let fixture: ComponentFixture<MusicDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
