import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, computed, Directive, inject, input, isDevMode, NgModule } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDrawerMode, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';


// Toolbar
// ToolbarLeft
// ToolbarRight
// Statusbar
// StatusbarLeft
// StatusbarRight
// Sidenav
// SidenavTop
// SidenavBottom
// Content
// ContentTop
// ContentBottom
// FloatTop
// FloatTopRight
// FloatTopLeft
// FloatTopCenter
// FloatBottom
// FloatBottomRight
// FloatBottomLeft
// FloatCenterCenter
// FloatLeftCenter
// FloatRightCenter




@Directive({ selector: "[vnToolbar]" }) export class ToolbarDirective { }
@Directive({ selector: "[vnToolbarLeft]" }) export class ToolbarLeftDirective { }
@Directive({ selector: "[vnToolbarRight]" }) export class ToolbarRightDirective { }
@Directive({ selector: "[vnStatusbar]" }) export class StatusbarDirective { }
@Directive({ selector: "[vnStatusbarLeft]" }) export class StatusbarLeftDirective { }
@Directive({ selector: "[vnStatusbarRight]" }) export class StatusbarRightDirective { }
@Directive({ selector: "[vnSidenav]" }) export class SidenavDirective { }
@Directive({ selector: "[vnSidenavTop]" }) export class SidenavTopDirective { }
@Directive({ selector: "[vnSidenavBottom]" }) export class SidenavBottomDirective { }
@Directive({ selector: "[vnContent]" }) export class ContentDirective { }
@Directive({ selector: "[vnContentTop]" }) export class ContentTopDirective { }
@Directive({ selector: "[vnContentBottom]" }) export class ContentBottomDirective { }
@Directive({ selector: "[vnFloatTop]" }) export class FloatTopDirective { }
@Directive({ selector: "[vnFloatTopRight]" }) export class FloatTopRightDirective { }
@Directive({ selector: "[vnFloatTopLeft]" }) export class FloatTopLeftDirective { }
@Directive({ selector: "[vnFloatTopCenter]" }) export class FloatTopCenterDirective { }
@Directive({ selector: "[vnFloatBottom]" }) export class FloatBottomDirective { }
@Directive({ selector: "[vnFloatBottomRight]" }) export class FloatBottomRightDirective { }
@Directive({ selector: "[vnFloatBottomLeft]" }) export class FloatBottomLeftDirective { }
@Directive({ selector: "[vnFloatCenterCenter]" }) export class FloatCenterCenterDirective { }
@Directive({ selector: "[vnFloatLeftCenter]" }) export class FloatLeftCenterDirective { }
@Directive({ selector: "[vnFloatRightCenter]" }) export class FloatRightCenterDirective { }




@Directive({
  selector: "[vnViewPort]",
  exportAs: "vnViewPort"
})
export class ViewPortDirective {
  private readonly observer = inject(BreakpointObserver)
  private readonly state = toSignal<BreakpointState>(
    this.observer.observe(Object.values(Breakpoints)),
    { initialValue: null }
  );

  private isMatched(breakpoint: string) {
    return computed(() => {
      this.state()
      return this.observer.isMatched(breakpoint)
    });

  }

  readonly isHandset = this.isMatched(Breakpoints.Handset);
  readonly isHandsetLandscape = this.isMatched(Breakpoints.HandsetLandscape);
  readonly isHandsetPortrait = this.isMatched(Breakpoints.HandsetPortrait);
  readonly isLarge = this.isMatched(Breakpoints.Large);
  readonly isMedium = this.isMatched(Breakpoints.Medium);
  readonly isSmall = this.isMatched(Breakpoints.Small);
  readonly isTablet = this.isMatched(Breakpoints.Tablet);
  readonly isTabletLandscape = this.isMatched(Breakpoints.TabletLandscape);
  readonly isTabletPortrait = this.isMatched(Breakpoints.TabletPortrait);
  readonly isWeb = this.isMatched(Breakpoints.Web);
  readonly isWebLandscape = this.isMatched(Breakpoints.WebLandscape);
  readonly isWebPortrait = this.isMatched(Breakpoints.WebPortrait);
  readonly isXLarge = this.isMatched(Breakpoints.XLarge);
  readonly isXSmall = this.isMatched(Breakpoints.XSmall);

  readonly sidenavMode = computed<MatDrawerMode>(() => {
    if (this.isSmall() || this.isXSmall()) {
      return 'over'
    } else {
      return 'side'
    }
  })

  readonly sidenavOpen = computed<boolean>(() => {
    return !(this.isSmall() || this.isXSmall())
  })
}


const layoutPositionDirectives = [
  ToolbarDirective,
  ToolbarLeftDirective,
  ToolbarRightDirective,
  StatusbarDirective,
  StatusbarLeftDirective,
  StatusbarRightDirective,
  SidenavDirective,
  SidenavTopDirective,
  SidenavBottomDirective,
  ContentDirective,
  ContentTopDirective,
  ContentBottomDirective,
  FloatTopDirective,
  FloatTopRightDirective,
  FloatTopLeftDirective,
  FloatTopCenterDirective,
  FloatBottomDirective,
  FloatBottomRightDirective,
  FloatBottomLeftDirective,
  FloatCenterCenterDirective,
  FloatLeftCenterDirective,
  FloatRightCenterDirective,
  ViewPortDirective
]



@NgModule({
  imports: [...layoutPositionDirectives],
  exports: [...layoutPositionDirectives]
})
export class LayoutPositionModule { }

@Component({
  selector: "vn-ng-test[selector]",
  template: `
  @if(isDevelopmentMode){
    <span title="This is shownn only in dev mode" style="color: green;">{{selector()}}</span>}
    `
})
export class NgTestSelector {
  isDevelopmentMode = isDevMode();
  selector = input<string>("None");
}


export const layoutCommonModules = [
  MatSidenavModule, MatButtonModule, MatIconModule, MatTooltipModule, MatToolbarModule,
]

@NgModule({
  imports: [...layoutCommonModules],
  exports: [...layoutCommonModules]
})
export class LayoutCommonModule { }