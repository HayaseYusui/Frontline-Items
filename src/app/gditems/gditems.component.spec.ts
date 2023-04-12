import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GditemsComponent } from './gditems.component';

describe('GditemsComponent', () => {
  let component: GditemsComponent;
  let fixture: ComponentFixture<GditemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GditemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
