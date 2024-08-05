import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiPaginationComponent } from './ui-pagination.component';

describe('UiPaginationComponent', () => {
  let component: UiPaginationComponent;
  let fixture: ComponentFixture<UiPaginationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiPaginationComponent]
    });
    fixture = TestBed.createComponent(UiPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
