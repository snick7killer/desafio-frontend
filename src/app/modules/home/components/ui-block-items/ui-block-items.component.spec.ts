import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiBlockItemsComponent } from './ui-block-items.component';

describe('UiBlockItemsComponent', () => {
  let component: UiBlockItemsComponent;
  let fixture: ComponentFixture<UiBlockItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiBlockItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiBlockItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
