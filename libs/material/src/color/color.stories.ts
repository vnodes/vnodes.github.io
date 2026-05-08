import type { Meta, StoryObj } from '@storybook/angular';
import { BgColorDirective, ColorDirective } from './color';

const meta: Meta<ColorDirective> = {
  component: ColorDirective,
  title: 'Style/Color',
};
export default meta;

type Story = StoryObj<ColorDirective>;

export const MaterialColors: Story = {
  render() {
    return {
      moduleMetadata: {
        imports: [ColorDirective, BgColorDirective]
      },
      template: `
<div vnColor="background">background</div>
<div vnColor="error">error</div>
<div vnColor="error-container">error-container</div>
<div vnColor="inverse-on-surface">inverse-on-surface</div>
<div vnColor="inverse-primary">inverse-primary</div>
<div vnColor="inverse-surface">inverse-surface</div>
<div vnColor="on-background">on-background</div>
<div vnColor="on-error">on-error</div>
<div vnColor="on-error-container">on-error-container</div>
<div vnColor="on-primary">on-primary</div>
<div vnColor="on-primary-container">on-primary-container</div>
<div vnColor="on-primary-fixed">on-primary-fixed</div>
<div vnColor="on-primary-fixed-variant">on-primary-fixed-variant</div>
<div vnColor="on-secondary">on-secondary</div>
<div vnColor="on-secondary-container">on-secondary-container</div>
<div vnColor="on-secondary-fixed">on-secondary-fixed</div>
<div vnColor="on-secondary-fixed-variant">on-secondary-fixed-variant</div>
<div vnColor="on-surface">on-surface</div>
<div vnColor="on-surface-variant">on-surface-variant</div>
<div vnColor="on-tertiary">on-tertiary</div>
<div vnColor="on-tertiary-container">on-tertiary-container</div>
<div vnColor="on-tertiary-fixed">on-tertiary-fixed</div>
<div vnColor="on-tertiary-fixed-variant">on-tertiary-fixed-variant</div>
<div vnColor="outline">outline</div>
<div vnColor="outline-variant">outline-variant</div>
<div vnColor="primary">primary</div>
<div vnColor="primary-container">primary-container</div>
<div vnColor="primary-fixed">primary-fixed</div>
<div vnColor="primary-fixed-dim">primary-fixed-dim</div>
<div vnColor="scrim">scrim</div>
<div vnColor="secondary">secondary</div>
<div vnColor="secondary-container">secondary-container</div>
<div vnColor="secondary-fixed">secondary-fixed</div>
<div vnColor="secondary-fixed-dim">secondary-fixed-dim</div>
<div vnColor="shadow">shadow</div>
<div vnColor="surface">surface</div>
<div vnColor="surface-bright">surface-bright</div>
<div vnColor="surface-container">surface-container</div>
<div vnColor="surface-container-high">surface-container-high</div>
<div vnColor="surface-container-highest">surface-container-highest</div>
<div vnColor="surface-container-low">surface-container-low</div>
<div vnColor="surface-container-lowest">surface-container-lowest</div>
<div vnColor="surface-dim">surface-dim</div>
<div vnColor="surface-tint">surface-tint</div>
<div vnColor="surface-variant">surface-variant</div>
<div vnColor="tertiary">tertiary</div>
<div vnColor="tertiary-container">tertiary-container</div>
<div vnColor="tertiary-fixed">tertiary-fixed</div>
<div vnColor="tertiary-fixed-dim">tertiary-fixed-dim</div>
<div vnColor="neutral-variant20">neutral-variant20</div>
<div vnColor="neutral10">neutral10</div>
      `
    }
  }
};



export const MaterialColorsAsBg: Story = {
  render() {
    return {
      moduleMetadata: {
        imports: [BgColorDirective, ColorDirective]
      },
      template: `
<div vnColor="on-background" vnBgColor="background">background</div>
<div vnColor="on-error" vnBgColor="error">error</div>
<div vnColor="on-error-container" vnBgColor="error-container">error-container</div>
<div vnColor="inverse-surface" vnBgColor="inverse-on-surface">inverse-on-surface</div>
<div vnColor="primary" vnBgColor="inverse-primary">inverse-primary</div>
<div vnColor="surface" vnBgColor="inverse-surface">inverse-surface</div>
<div vnColor="background" vnBgColor="on-background">on-background</div>
<div vnColor="error" vnBgColor="on-error">on-error</div>
<div vnColor="error-container" vnBgColor="on-error-container">on-error-container</div>
<div vnColor="primary" vnBgColor="on-primary">on-primary</div>
<div vnColor="primary-container" vnBgColor="on-primary-container">on-primary-container</div>
<div vnColor="primary-fixed" vnBgColor="on-primary-fixed">on-primary-fixed</div>
<div vnColor="primary-fixed-variant" vnBgColor="on-primary-fixed-variant">on-primary-fixed-variant</div>
<div vnColor="secondary" vnBgColor="on-secondary">on-secondary</div>
<div vnColor="secondary-container" vnBgColor="on-secondary-container">on-secondary-container</div>
<div vnColor="secondary-fixed" vnBgColor="on-secondary-fixed">on-secondary-fixed</div>
<div vnColor="secondary-fixed-variant" vnBgColor="on-secondary-fixed-variant">on-secondary-fixed-variant</div>
<div vnColor="surface" vnBgColor="on-surface">on-surface</div>
<div vnColor="surface-variant" vnBgColor="on-surface-variant">on-surface-variant</div>
<div vnColor="tertiary" vnBgColor="on-tertiary">on-tertiary</div>
<div vnColor="tertiary-container" vnBgColor="on-tertiary-container">on-tertiary-container</div>
<div vnColor="tertiary-fixed" vnBgColor="on-tertiary-fixed">on-tertiary-fixed</div>
<div vnColor="tertiary-fixed-variant" vnBgColor="on-tertiary-fixed-variant">on-tertiary-fixed-variant</div>
<div vnColor="primary" vnBgColor="outline">outline</div>
<div vnColor="primary" vnBgColor="outline-variant">outline-variant</div>
<div vnBgColor="primary">primary</div>
<div vnBgColor="primary-container">primary-container</div>
<div vnBgColor="primary-fixed">primary-fixed</div>
<div vnBgColor="primary-fixed-dim">primary-fixed-dim</div>
<div vnBgColor="scrim">scrim</div>
<div vnBgColor="secondary">secondary</div>
<div vnBgColor="secondary-container">secondary-container</div>
<div vnBgColor="secondary-fixed">secondary-fixed</div>
<div vnBgColor="secondary-fixed-dim">secondary-fixed-dim</div>
<div vnColor="surface" vnBgColor="shadow">shadow</div>
<div vnBgColor="surface">surface</div>
<div vnBgColor="surface-bright">surface-bright</div>
<div vnBgColor="surface-container">surface-container</div>
<div vnBgColor="surface-container-high">surface-container-high</div>
<div vnBgColor="surface-container-highest">surface-container-highest</div>
<div vnBgColor="surface-container-low">surface-container-low</div>
<div vnBgColor="surface-container-lowest">surface-container-lowest</div>
<div vnBgColor="surface-dim">surface-dim</div>
<div vnBgColor="surface-tint">surface-tint</div>
<div vnBgColor="surface-variant">surface-variant</div>
<div vnBgColor="tertiary">tertiary</div>
<div vnBgColor="tertiary-container">tertiary-container</div>
<div vnBgColor="tertiary-fixed">tertiary-fixed</div>
<div vnBgColor="tertiary-fixed-dim">tertiary-fixed-dim</div>
<div vnBgColor="neutral-variant20">neutral-variant20</div>
<div vnBgColor="neutral10">neutral10</div>
      `
    }
  }
};

