import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFeedLayoutComponent } from './my-feed-layout.component';

describe('MyFeedLayoutComponent', () => {
  let component: MyFeedLayoutComponent;
  let fixture: ComponentFixture<MyFeedLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyFeedLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFeedLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
