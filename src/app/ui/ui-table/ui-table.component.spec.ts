import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTableComponent } from './ui-table.component';

describe('UiTableComponent', () => {
  let component: UiTableComponent;
  let fixture: ComponentFixture<UiTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UiTableComponent]
    });
    fixture = TestBed.createComponent(UiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
