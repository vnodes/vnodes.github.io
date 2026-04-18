import { computed, Directive, HostBinding, input, NgModule } from "@angular/core";

export type FlexDirValue = 'column' | 'row' | 'column-reverse' | 'row-reverse'
export type FlexWrapValue = 'wrap' | 'nowrap' | 'wrap-reverse';

@Directive({
    selector: "[vnFlex]",
    standalone: true,
    host: {
        "[style.display]": "'flex'",
        "[style.flex-direction]": 'computedValue()',
    }
})
export class Flex {
    value = input<FlexDirValue>("row", { alias: "vnFlex" });
    computedValue = computed(() => {
        return this.value() ? this.value() : 'row'
    })
}

@Directive({
    selector: "[vnFlexWrap]",
    standalone: true,
    host: {
        "[style.flex-wrap]": "computedValue()",

    }
})
export class FlexWrap {
    value = input<FlexWrapValue>("wrap", { alias: "vnFlexWrap" });
    computedValue = computed<FlexWrapValue>(() => {
        return this.value() ? this.value() : 'wrap'
    })
}


@Directive({
    selector: "[vnFlexGrow]",
    standalone: true,
    host: {
        "[style.flex-grow]": 'computedValue()'
    }
})
export class FlexGrow {
    value = input<string>("", { alias: "vnFlexGrow" });
    computedValue = computed(() => {
        return this.value() ? this.value() : '1'
    })
}

@Directive({
    selector: "[vnFlexGap]",
    standalone: true,
    host: {
        "[style.gap]": 'computedValue()'
    }
})
export class FlexGap {
    value = input<string>("", { alias: "vnFlexGap" });
    computedValue = computed(() => {
        return this.value() ? this.value() : '0.5em'
    })
}

@Directive({
    selector: "[vnFlexRowGap]",
    standalone: true,
    host: {
        "[style.row-gap]": 'computedValue()'
    }
})
export class FlexRowGap {
    value = input<string>("", { alias: "vnFlexRowGap" });
    computedValue = computed(() => {
        return this.value() ? this.value() : '1'
    })
}
@Directive({
    selector: "[vnFlexColGap]",
    standalone: true,
    host: {
        "[style.column-gap]": 'computedValue()'
    }
})
export class FlexColGap {
    value = input<string>("", { alias: "vnFlexColGap" });
    computedValue = computed(() => {
        return this.value() ? this.value() : '1'
    })
}

@Directive({
    selector: "[vnFlexFull]",
    standalone: true
})
export class FlexFull {
    @HostBinding("style.width") flexFull = "100%"
}

@NgModule({
    imports: [Flex, FlexGrow, FlexGap, FlexColGap, FlexWrap, FlexRowGap, FlexFull],
    exports: [Flex, FlexGrow, FlexGap, FlexColGap, FlexWrap, FlexRowGap, FlexFull]
})
export class FlexModule { }