import { Component, Directive, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatCardModule
} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FlexModule } from '@vnodes/material/flex';


@Directive({
  selector: "button[vnCardAction]"
})
export class CardActionDirective {

}
@Component({
  selector: 'vn-card',
  imports: [FlexModule, MatCardModule, MatButtonModule, MatIconModule],
  template: `
  <mat-card [style.width]="'400px'" >    
      <mat-card-header>
          @if(avatarSrc()) { <img  matCardAvatar [src]="avatarSrc()" [alt]="avatarAlt()">}
          @if(title()){ <mat-card-title>{{title()}}</mat-card-title>}
          @if(subTitle()){ <mat-card-subtitle>{{subTitle()}}</mat-card-subtitle>}
      </mat-card-header>

      @if(imgSrc()){ 
      <img matCardImage  [src]="imgSrc()" [alt]="imgAlt()">
      }

  @if(content()){  

      <mat-card-content>
          @for(c of content(); track c){ 
            <p> {{c}}</p>
          }
      </mat-card-content>
  }
  <mat-card-actions>
    <div vnFlexRow vnFlexFull  vnFlexWrap vnFlexCenter vnFlexGap >
      <ng-content select="button[vnCardAction]"></ng-content>
    </div>
  </mat-card-actions>
</mat-card>

  `,
  styles: ``,
})
export class CardComponent {


  title = input<string>()
  subTitle = input<string>()
  content = input<string[]>([]);

  avatarSrc = input<string>();
  avatarAlt = input<string>();

  imgSrc = input<string>();
  imgAlt = input<string>();

  width = input<string>('360px')
  height = input('auto')
}
