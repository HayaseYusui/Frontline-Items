import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdtoolsComponent } from './gdtools.component';

describe('GdtoolsComponent', () => {
  let component: GdtoolsComponent;
  let fixture: ComponentFixture<GdtoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GdtoolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GdtoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
