import { Component, effect, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';

@Component({
  imports: [
    RouterModule,
    MatIconModule,
    MatButtonModule
  ],
  selector: 'vn-root',
  templateUrl: "./app.html"

})
export class App implements OnInit {
  titleManager = inject(Title);
  t = inject(TranslocoService)

  // 1. Create a computed signal or use selectTranslate
  // selectTranslate returns an Observable, toSignal converts it.
  protected title = toSignal(this.t.selectTranslate('Hello World'));

  ngOnInit(): void {
    effect(() => {
      const currentTitle = this.title();
      if (currentTitle) {
        this.titleManager.setTitle(currentTitle);
      }
    });
  }
}
