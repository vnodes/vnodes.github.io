import { TestBed } from '@angular/core/testing';
import { FormSampleComponent, provideTestImports } from '@vnodes/material/form-sample';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, FormSampleComponent, ...provideTestImports()]
    }).compileComponents();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled).toBeDefined();
  });
});
