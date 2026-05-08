import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BaseInput } from '@vnodes/material/input';

@Component({
  selector: 'vn-input[type="slide"], vn-input[type="slider"]',
  standalone: true,
  imports: [ReactiveFormsModule, MatSlideToggleModule],
  template: `
    <mat-slide-toggle
    [formControl]="formControl()"
    [disabled]="disabled()"
    [ariaLabel]="label()"
    >
    {{label()}}

    </mat-slide-toggle>
  `
})
export class SlideToggleComponent extends BaseInput {
  type = input.required<"slider" | 'slide'>();
}
