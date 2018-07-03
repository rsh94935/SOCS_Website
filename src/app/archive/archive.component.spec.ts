import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Archive } from './archive.component';

describe('ArchiveComponent', () => {
  let component: Archive;
  let fixture: ComponentFixture<Archive>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Archive ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Archive);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
