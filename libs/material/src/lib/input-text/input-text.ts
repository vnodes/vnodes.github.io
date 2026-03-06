import { Component, input, OnInit, signal } from '@angular/core';
import { outputFromObservable, toObservable } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { debounceTime, distinctUntilChanged } from 'rxjs';


@Component({
  selector: 'vn-input-text',
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  template: `
    <mat-form-field>  
      <mat-label>{{label()}}</mat-label>
      <input type="text" matInput [required]="isRequired()" [(ngModel)]="value">
    </mat-form-field>
  `,
  styles: ``,
})
export class InputText implements OnInit {
  label = input<string>("Not set")
  isRequired = input<boolean>(false)

  value = signal('')

  onValueChange = outputFromObservable(toObservable(this.value).pipe(
    debounceTime(300),
    distinctUntilChanged()
  ))


  ngOnInit(): void {
    this.onValueChange.subscribe(v => {
      console.log("Change: ", v)
    })
  }
}
