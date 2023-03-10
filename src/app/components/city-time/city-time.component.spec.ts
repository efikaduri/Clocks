import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityTimeComponent } from './city-time.component';

describe('CityTimeComponent', () => {
  let component: CityTimeComponent;
  let fixture: ComponentFixture<CityTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityTimeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
