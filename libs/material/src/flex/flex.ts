import { Directive, HostBinding, input, NgModule } from "@angular/core";

@Directive({
    selector: "[vnFlex]",
    standalone: true,
    host: {
        "[style.display]": "'flex'",
        "[style.flex-direction]": "vnFlex()",
        "[style.flex-wrap]": "flexWrap()",
        "[style.gap]": "flexGap()",
        "[style.row-gap]": "flexRowGap()",
        "[style.column-gap]": "flexColGap()",
    }
})
export class Flex {
    vnFlex = input<'column' | 'row' | 'column-reverse' | 'row-reverse'>('row');
    flexWrap = input<"wrap" | "wrap-reverse">('wrap');
    flexGap = input<string>("unset");
    flexRowGap = input<string>("unset")
    flexColGap = input<string>("unset")

}


@Directive({
    selector: "[vnFlexGrow]",
    standalone: true,
    host: {
        "[style.flex-grow]": 'vnFlexGrow()'
    }
})
export class FlexGrow {
    vnFlexGrow = input<string>("1");
}

@Directive({
    selector: "[vnFlexFull]",
    standalone: true
})
export class FlexFull {
    @HostBinding("style.width") flexFull = "100%"
}

@Directive({
    selector: "[vnFlexGap]",
    standalone: true
})
export class FlexGap {
    vnFlexGap = input("1em")
    @HostBinding("style.gap") flexFull = this.vnFlexGap();
}


@NgModule({
    imports: [Flex, FlexGrow, FlexFull],
    exports: [Flex, FlexGrow, FlexFull]
})
export class FlexModule { }