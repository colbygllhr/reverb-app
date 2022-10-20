import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCategoriesLayoutComponent } from './view-categories-layout.component';

describe('ViewCategoriesLayoutComponent', () => {
  let component: ViewCategoriesLayoutComponent;
  let fixture: ComponentFixture<ViewCategoriesLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCategoriesLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewCategoriesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
