import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BaseInput } from '@vnodes/material/input';

@Component({
  selector: 'vn-input[type=slide]',
  standalone: true,
  imports: [ReactiveFormsModule, MatSlideToggleModule],
  template: `
  <mat-slide-toggle
       [formControl]="formControl()"
       [disabled]="disabled()"
  >
  {{label()}}
  </mat-slide-toggle>
  `
})
export class SlideToggleComponent extends BaseInput { }
