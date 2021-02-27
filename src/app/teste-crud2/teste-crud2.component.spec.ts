import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteCRUD2Component } from './teste-crud2.component';

describe('TesteCRUD2Component', () => {
  let component: TesteCRUD2Component;
  let fixture: ComponentFixture<TesteCRUD2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteCRUD2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteCRUD2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
