import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputIndicator } from './input-indicator';

describe('InputIndicator', () => {
  let component: InputIndicator;
  let fixture: ComponentFixture<InputIndicator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputIndicator],
    }).compileComponents();

    fixture = TestBed.createComponent(InputIndicator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
