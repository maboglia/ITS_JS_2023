import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScienziatiComponent } from './scienziati.component';

describe('ScienziatiComponent', () => {
  let component: ScienziatiComponent;
  let fixture: ComponentFixture<ScienziatiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScienziatiComponent]
    });
    fixture = TestBed.createComponent(ScienziatiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
