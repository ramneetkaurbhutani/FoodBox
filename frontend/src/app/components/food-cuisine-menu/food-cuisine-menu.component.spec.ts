import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodCuisineMenuComponent } from './food-cuisine-menu.component';

describe('FoodCuisineMenuComponent', () => {
  let component: FoodCuisineMenuComponent;
  let fixture: ComponentFixture<FoodCuisineMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodCuisineMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodCuisineMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
