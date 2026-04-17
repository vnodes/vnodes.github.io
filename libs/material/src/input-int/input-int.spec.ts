import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputIntComponent } from './input-int';

describe('InputIntComponent', () => {
  let component: InputIntComponent;
  let fixture: ComponentFixture<InputIntComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputIntComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InputIntComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
