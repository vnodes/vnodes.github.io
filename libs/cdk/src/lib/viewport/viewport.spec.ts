import { TestBed } from '@angular/core/testing';
import { Viewport } from './viewport';

describe('Viewport', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Viewport],
    }).compileComponents();
  });

  it('should create', () => {
    expect(TestBed).toBeDefined();
  });
});
