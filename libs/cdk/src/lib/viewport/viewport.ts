import {
  BreakpointObserver,
  Breakpoints,
  LayoutModule,
} from '@angular/cdk/layout';
import { Directive, inject } from '@angular/core';

import { distinctUntilChanged, map, shareReplay } from 'rxjs';
/**
 * ## Breakpoints
 *
 * -  XSmall	(max-width: 599.98px)
 * -  Small	(min-width: 600px) and (max-width: 959.98px)
 * -  Medium	(min-width: 960px) and (max-width: 1279.98px)
 * -  Large	(min-width: 1280px) and (max-width: 1919.98px)
 * -  XLarge	(min-width: 1920px)
 * -  Handset	(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)
 * -  Tablet	(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)
 * -  Web	(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)
 * -  HandsetPortrait	(max-width: 599.98px) and (orientation: portrait)
 * -  TabletPortrait	(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)
 * -  WebPortrait	(min-width: 840px) and (orientation: portrait)
 **/
@Directive({
  selector: '[vnViewport]',
  standalone: true,
  providers: [LayoutModule],
  exportAs: 'viewport',
})
export class Viewport {
  protected readonly bo = inject(BreakpointObserver);

  readonly isXSmall = this.bo.observe([Breakpoints.XSmall]).pipe(
    map((value) => value.matches),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly isSmall = this.bo.observe([Breakpoints.Small]).pipe(
    map((value) => value.matches),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly isMedium = this.bo.observe([Breakpoints.Medium]).pipe(
    map((value) => value.matches),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly isLarge = this.bo.observe([Breakpoints.Large]).pipe(
    map((value) => value.matches),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly isXLarge = this.bo.observe([Breakpoints.XLarge]).pipe(
    map((value) => value.matches),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly isHandset = this.bo.observe([Breakpoints.Handset]).pipe(
    map((value) => value.matches),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly isTablet = this.bo.observe([Breakpoints.Tablet]).pipe(
    map((value) => value.matches),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly isWeb = this.bo.observe([Breakpoints.Web]).pipe(
    map((value) => value.matches),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly isHandsetPortrait = this.bo
    .observe([Breakpoints.HandsetPortrait])
    .pipe(
      map((value) => value.matches),
      distinctUntilChanged(),
      shareReplay(1)
    );

  readonly isTabletPortrait = this.bo
    .observe([Breakpoints.TabletPortrait])
    .pipe(
      map((value) => value.matches),
      distinctUntilChanged(),
      shareReplay(1)
    );

  readonly isWebPortrait = this.bo.observe([Breakpoints.WebPortrait]).pipe(
    map((value) => value.matches),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly isHandsetLandscape = this.bo
    .observe([Breakpoints.HandsetLandscape])
    .pipe(
      map((value) => value.matches),
      distinctUntilChanged(),
      shareReplay(1)
    );

  readonly isTabletLandscape = this.bo
    .observe([Breakpoints.TabletLandscape])
    .pipe(
      map((value) => value.matches),
      distinctUntilChanged(),
      shareReplay(1)
    );

  readonly isWebLandscape = this.bo.observe([Breakpoints.WebLandscape]).pipe(
    map((value) => value.matches),
    distinctUntilChanged(),
    shareReplay(1)
  );

  readonly isNotMobile = this.isHandset.pipe(map((e) => !e));
}
