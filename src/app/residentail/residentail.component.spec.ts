import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentailComponent } from './residentail.component';

describe('ResidentailComponent', () => {
  let component: ResidentailComponent;
  let fixture: ComponentFixture<ResidentailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResidentailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
