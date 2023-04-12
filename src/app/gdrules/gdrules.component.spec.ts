import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdrulesComponent } from './gdrules.component';

describe('GdrulesComponent', () => {
  let component: GdrulesComponent;
  let fixture: ComponentFixture<GdrulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdrulesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdrulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
