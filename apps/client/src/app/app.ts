import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

@Component({
  imports: [RouterModule,

    MatIconModule,
    MatButtonModule
  ],
  selector: 'vn-root',
templateUrl:"./app.html"

})
export class App implements OnInit {
  titleManager = inject(Title);


  protected title = $localize`Hello World`;

  ngOnInit(): void {
    this.titleManager.setTitle(this.title)
  }
}
