import { Component, input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BaseInput } from '@vnodes/material/input';

@Component({
  selector: 'vn-input[type="slide"], vn-input[type="slider"], vn-input[type="slide-toggle"]',
  standalone: true,
  imports: [ReactiveFormsModule, MatSlideToggleModule],
  template: `
  @let __control = formControl();

  @if(__control){ 
    <mat-slide-toggle
        [formControl]="__control"
        [disabled]="disabled()"
        [ariaLabel]="label()"
        [required]="required()"
      >
      {{label()}}   
    </mat-slide-toggle>
  }
  `
})
export class SlideToggleComponent extends BaseInput {
  type = input.required<"slider" | 'slide' | 'slide-toggle'>();
}
