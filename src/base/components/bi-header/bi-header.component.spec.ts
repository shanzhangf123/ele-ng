import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiHeaderComponent } from './bi-header.component';

describe('BiHeaderComponent', () => {
  let component: BiHeaderComponent;
  let fixture: ComponentFixture<BiHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
