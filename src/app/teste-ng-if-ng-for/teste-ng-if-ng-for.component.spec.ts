import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteNgIfNgForComponent } from './teste-ng-if-ng-for.component';

describe('TesteNgIfNgForComponent', () => {
  let component: TesteNgIfNgForComponent;
  let fixture: ComponentFixture<TesteNgIfNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteNgIfNgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteNgIfNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
