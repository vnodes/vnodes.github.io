import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BaseInput } from './input';

describe('InputComponent', () => {
  let component: BaseInput;
  let fixture: ComponentFixture<BaseInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseInput],
    }).compileComponents();

    fixture = TestBed.createComponent(BaseInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
