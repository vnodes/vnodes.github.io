import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutAppComponent } from './layout-app';

describe('LayoutAppComponent', () => {
  let component: LayoutAppComponent;
  let fixture: ComponentFixture<LayoutAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutAppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutAppComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
