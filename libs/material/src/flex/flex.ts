import { computed, Directive, HostBinding, input, NgModule } from "@angular/core";

export type FlexDirValue = '' | 'column' | 'row' | 'column-reverse' | 'row-reverse'
export type FlexWrapValue = '' | 'wrap' | 'nowrap' | 'wrap-reverse';

@Directive({
    selector: "[vnFlex]",
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
    selector: "[vnFlexRow]",
    host: {
        '[style.display]': '"flex"',
        '[style.flex-direction]': '"row"',
    }
})
export class FlexRow { }

@Directive({
    selector: "[vnFlexCol]",
    host: {
        '[style.display]': '"flex"',
        '[style.flex-direction]': '"column"'
    }
})
export class FlexCol { }

@Directive({
    selector: "[vnFlexBetween]",
    host: {
        '[style.justify-content]': '"space-between"',
        '[style.width]': '"100%"',
    }
})
export class FlexBetween { }

@Directive({
    selector: "[vnFlexCenter]",
    host: {
        '[style.align-items]': '"center"',
    }
})
export class FlexCenter { }



@Directive({
    selector: "[vnFlexWrap]",
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
})
export class FlexFull {
    @HostBinding("style.width") flexFull = "100%"
}

@Directive({
    selector: "[vnFlexContainer]",
    host: {
        '[style.display]': '"flex"',
        '[style.flex-direction]': '"column"',
        '[style.width]': '"100%"',
        '[style.height]': '"100%"',
    }
})
export class FlexContainer {
    @HostBinding("style.width") width = "100%"
    @HostBinding("style.height") height = "100%"
}


export const flexboxDirectives = [
    Flex,
    FlexGrow,
    FlexGap,
    FlexColGap,
    FlexWrap,
    FlexRowGap,
    FlexFull,
    FlexRow,
    FlexCol,
    FlexBetween,
    FlexContainer,
    FlexCenter
];

@NgModule({
    imports: [...flexboxDirectives],
    exports: [...flexboxDirectives]
})
export class FlexModule { }