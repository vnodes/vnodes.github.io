import { computed, Directive, HostBinding, input, NgModule } from "@angular/core";

export type FlexDirectionOptions = '' | 'column' | 'row' | 'column-reverse' | 'row-reverse'
export type FlexWrapOptions = '' | 'wrap' | 'nowrap' | 'wrap-reverse';


/**
 * Set display style value of the container flex
 */
@Directive({
    selector: "[vnFlex]",
    host: {
        "[style.display]": "'flex'",
        "[style.flex-direction]": 'computedVnFlex()',
    }
})
export class Flex {
    /**
     * Flex direction {@link FlexDirectionOptions}
     */
    vnFlex = input<FlexDirectionOptions>("row");

    computedVnFlex = computed(() => {
        return this.vnFlex() ? this.vnFlex() : 'row'
    })
}


/**
 * Set `display` style `flex` and `flex-direction` `row`
 */
@Directive({
    selector: "[vnFlexRow]",
    host: {
        '[style.display]': '"flex"',
        '[style.flex-direction]': '"row"',
    }
})
export class FlexRow { }


/**
 * Set `display` style `flex` and `flex-direction` `column`
 */
@Directive({
    selector: "[vnFlexCol]",
    host: {
        '[style.display]': '"flex"',
        '[style.flex-direction]': '"column"'
    }
})
export class FlexCol { }


/**
 * Set `justify-content` `space-between` and the `width` `100%`
 */
@Directive({
    selector: "[vnFlexBetween]",
    host: {
        '[style.justify-content]': '"space-between"',
        '[style.width]': '"100%"',
    }
})
export class FlexBetween { }


/**
 * Set `align-items` `center`, and `justify-content` `center`
 */
@Directive({
    selector: "[vnFlexCenter]",
    host: {
        '[style.align-items]': '"center"',
        '[style.justify-content]': '"center"',
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
    value = input<FlexWrapOptions>("wrap", { alias: "vnFlexWrap" });
    computedValue = computed<FlexWrapOptions>(() => {
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
        return this.value() ? this.value() : '1em'
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