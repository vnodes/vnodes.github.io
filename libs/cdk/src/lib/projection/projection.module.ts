import { NgModule } from '@angular/core';
import {
  ContentBottom,
  ContentTop,
  FeaturenavBottom,
  FeaturenavTop,
  SidenavBottom,
  SidenavTop,
  StatusbarLeft,
  StatusbarRight,
  ToolbarLeft,
  ToolbarRight,
} from './projection.directive';

const directives = [
  SidenavTop,
  SidenavBottom,
  FeaturenavTop,
  FeaturenavBottom,
  ContentTop,
  ContentBottom,
  ToolbarLeft,
  ToolbarRight,
  StatusbarLeft,
  StatusbarRight,
];

/**
 * Module that contains a list of projection directives
 */
@NgModule({
  imports: [...directives],
  exports: [...directives],
})
export class ProjectionModule {}
