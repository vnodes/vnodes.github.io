import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BaseInput } from '@vnodes/material/input';

@Component({
  selector: 'vn-input[type=slide]',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSlideToggleModule],
  template: `
  <mat-slide-toggle
       type="text"
       autocomplete="off"
       matInput
       [formControl]="formControl()"
       [disabled]="disabled()"
       (input)="handleInput($event)"
       (blur)="handleBlur()"
       [minlength]="minlength()"
       [maxlength]="maxlength()"
       [required]="required()"
  >{{label()}}</mat-slide-toggle>
  `
})
export class SlideToggleComponent extends BaseInput { }
