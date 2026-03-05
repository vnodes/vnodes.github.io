import { Directive } from '@angular/core';

@Directive({ selector: '[vnSidenavTop]', standalone: true })
export class SidenavTop { }
@Directive({ selector: '[vnSidenavBottom]', standalone: true })
export class SidenavBottom { }
@Directive({ selector: '[vnFeaturenavTop]', standalone: true })
export class FeaturenavTop { }
@Directive({ selector: '[vnFeaturenavBottom]', standalone: true })
export class FeaturenavBottom { }
@Directive({ selector: '[vnContentTop]', standalone: true })
export class ContentTop { }
@Directive({ selector: '[vnContentBottom]', standalone: true })
export class ContentBottom { }
@Directive({ selector: '[vnToolbarLeft]', standalone: true })
export class ToolbarLeft { }
@Directive({ selector: '[vnToolbarRight]', standalone: true })
export class ToolbarRight { }
@Directive({ selector: '[vnStatusbarLeft]', standalone: true })
export class StatusbarLeft { }
@Directive({ selector: '[vnStatusbarRight]', standalone: true })
export class StatusbarRight { }
