import { Component, model, OnDestroy, OnInit, signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ButtonToggleComponent, ButtonToggleOption } from '@vnodes/material/button-toggle';

@Component({
  selector: 'vn-media[type="slide"]',
  imports: [ButtonToggleComponent, MatProgressSpinnerModule],
  template: `
  <div class="container">
    {{active()}}
      <div class="slide">
        @for(item of items; track item.id){ 
           @if(active() ===item.id){ <img [id]="item.id" [src]="item.src" [alt]="item.src">}
        }
     
      </div>

      <div>


      <!-- <svg [attr.width]="100" [attr.height]="100"  [attr.viewBox]="'0 0 ' + 100 + ' ' + 100"> -->
      <!-- <circle 
        [attr.cx]="(100 / 2)" 
        [attr.cy]="(100 / 2)" 
        [attr.r]="40" 
        [attr.fill]="'transparent'" 
        stroke="var(--mat-sys-primary)" 
        stroke-width="20" 
      />
    </svg> -->
    <svg width="100%" height="100" >
  <circle cx="50" cy="50" r="50" style="fill:red;">
    <animate
      attributeName="cx"
      begin="0s"
      dur="8s"
      from="50"
      to="90%"
      repeatCount="indefinite" />
  </circle>
</svg>
        <mat-spinner mode="determinate" [value]="progress()"></mat-spinner>
        <vn-input type="buttons" [options]="options" [(value)]="active" >
          
          </vn-input>
      </div>
  </div>
  
  `,
  styles: ` 

  .container { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow-x: hidden;
    border: 3px solid gray;
    border-radius: 1em;
  }

  img{ 
    width: 200px;
    height: 200px;
  }

  .slide{
    display: flex;
    flex-direction: row;
    justify-content: center;
    border: 10px solid blue;
    width: 100%;
   }
  @keyframes slideLeft { 
    %0{ 
      margin-left: 0;
    }

    %100{ 
      margin-left:-100%
    }
  }
  
  `
})
export class SliderComponent implements OnInit, OnDestroy {
  progress = signal(0)
  interval!: ReturnType<typeof setInterval>;
  length = 3_000;

  options: ButtonToggleOption[] = [
    { label: "0", value: '0' },
    { label: "1", value: '1' },
    { label: "2", value: '2' },
    { label: "3", value: '3' },
    { label: "4", value: '4' },
    { label: "5", value: '5' },
  ]
  active = model<string>('0')

  items = [
    { id: "0", src: "./imgs/placeholder0.svg" },
    { id: "1", src: "./imgs/placeholder1.svg" },
    { id: "2", src: "./imgs/placeholder2.svg" },
    { id: "3", src: "./imgs/placeholder3.svg" },
    { id: "4", src: "./imgs/placeholder4.svg" },
    { id: "5", src: "./imgs/placeholder5.svg" },
  ]
  ngOnInit(): void {

    this.interval = setInterval(() => {
      this.progress.update((value => value + 1))

      if (this.progress() >= 100) {
        this.progress.update(() => 0);
        const nextIndex = this.items.findIndex(e => e.id === this.active()) + 1;
        this.active.update(() => nextIndex + '');

      }
    }, 50)



  }

  ngOnDestroy(): void {
    clearInterval(this.interval)
  }
}
