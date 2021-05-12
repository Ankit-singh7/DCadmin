import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientCatComponent } from './ingredient-cat.component';

describe('IngredientCatComponent', () => {
  let component: IngredientCatComponent;
  let fixture: ComponentFixture<IngredientCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
