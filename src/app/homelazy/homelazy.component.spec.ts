import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelazyComponent } from './homelazy.component';

describe('HomelazyComponent', () => {
  let component: HomelazyComponent;
  let fixture: ComponentFixture<HomelazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomelazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
