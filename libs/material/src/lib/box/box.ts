import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'vn-box',
  imports: [],
  standalone: true,
  template: `
    <div
      class="flex flex-col"
      [style.height]="computedHeight()"
      [style.width]="computedWidth()"
      [title]="title()"
      [style.aspectRatio]="computedRatio()"
    >
      <ng-content>
        <p>No Content</p>
      </ng-content>
    </div>
  `,
})
export class Box {
  size = input(0);

  heightRatio = input(1);
  widthRatio = input(1);

  computedWidth = computed(() => {
    return this.size() * this.widthRatio() + this.unit();
  });

  computedHeight = computed(() => {
    return this.size() * this.heightRatio() + this.unit();
  });

  computedRatio = computed(() => {
    return this.heightRatio() + '/' + this.widthRatio();
  });

  unit = input('px');

  title = computed(() => {
    return this.computedWidth() + ' X ' + this.computedHeight();
  });
}
