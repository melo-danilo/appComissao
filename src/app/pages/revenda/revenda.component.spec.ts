import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevendaComponent } from './revenda.component';

describe('RevendaComponent', () => {
  let component: RevendaComponent;
  let fixture: ComponentFixture<RevendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RevendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
