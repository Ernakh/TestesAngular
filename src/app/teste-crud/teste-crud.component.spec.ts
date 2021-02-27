import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteCRUDComponent } from './teste-crud.component';

describe('TesteCRUDComponent', () => {
  let component: TesteCRUDComponent;
  let fixture: ComponentFixture<TesteCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
