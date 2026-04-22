import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormSampleComponent } from '@vnodes/material/form-sample';
@Component({
  imports: [RouterModule, FormSampleComponent],
  selector: 'vn-root',
  templateUrl: './app.html',
  styles: ``,
})
export class App { }
