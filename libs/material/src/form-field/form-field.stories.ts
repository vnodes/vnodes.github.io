import type { Meta, StoryObj } from '@storybook/angular';
import { FormFieldComponent, FormFieldOption, FormFieldTypes } from './form-field';

const meta: Meta<FormFieldComponent> = {
  component: FormFieldComponent,
  title: 'FormField',

  argTypes: {
    name: {
      description: "Input name",
    },
    type: {
      description: "Input type",
      control: "select",
      options: Object.keys(FormFieldTypes)
    },
    label: {
      description: "Input description",
    },
    hint: {
      description: "Detailed input description"
    },
    id: {
      description: "Optional input id"
    },
    labelPosition: {
      description: "Label position for checkbox inputs"
    },

    options: {
      description: "List options for multi select inputs"
    },
    control: {
      description: "Internal reactive form control"
    },
    min: {
      description: "Minimum allowed number value"
    },
    max: {
      description: "Maximum allowed number value"
    },

    minlength: {
      description: "Minimum alllowed legnth for text and multi select inpts"
    },
    maxlength: {
      description: "Maximum alllowed legnth for text and multi select inpts"
    },
    defaultValue: {
      description: "Default value"
    },
    decimals: {
      description: "Maximum allowed decimals", 
      control:"number"
    }
  }
};
export default meta;

type Story = StoryObj<FormFieldComponent>;

const options: FormFieldOption[] = [
  { id: 1, icon: "info", avatar: "./favicon.png", label: "Option 1", value: "option value 1" },
  { id: 2, icon: "info", avatar: "./favicon.png", label: "Option 2", value: "option value 2" },
  { id: 3, icon: "info", avatar: "./favicon.png", label: "Option 3", value: "option value 3" },
  { id: 4, icon: "info", avatar: "./favicon.png", label: "Option 4", value: "option value 4" },

]

export const TextInputRequired: Story = {
  args: {
    type: "text",
    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    required: true,
    minlength: 3,
    maxlength: 10,
  },
};

export const TextInputOptional: Story = {
  args: {
    type: "text",
    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    minlength: 3,
    maxlength: 10,
  },
};

export const NumberInputRequired: Story = {
  args: {
    type: "number",

    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    decimals: 6,
    required: true,
    min: 0,
    max: 10
  },
};

export const NumberInputOptional: Story = {
  args: {
    type: "number",

    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    decimals: 6,
    min: 0,
    max: 10
  },
};

export const NumberInputWithDefaultValue: Story = {
  args: {
    type: "number",

    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    decimals: 6,
    required: true,
    min: 0,
    max: 10,
    defaultValue: 9
  },
};

export const IntegerInputRequired: Story = {
  args: {
    type: "integer",

    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    required: true,
    min: 0,
    max: 100,
    defaultValue: 100
  },
};

export const IntegerInputOptinal: Story = {
  args: {
    type: "integer",

    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    min: 0,
    max: 100,
    defaultValue: 100
  },
};



export const DateInput: Story = {
  args: {
    type: "date",

    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    defaultValue: new Date("10/10/1990"),
    minDate: new Date("5/1/2026"),
    maxDate: new Date("5/20/2026"),
  },
};



export const TimeInput: Story = {
  args: {
    type: "time",

    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    defaultValue: new Date()
  },
};


export const SelectInput: Story = {
  args: {
    type: "select",

    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    options,
    defaultValue: "option value 5"
  },
};


export const ListSelectInputMultiple: Story = {
  args: {
    type: "list",
    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    multiple: true,
    options,
    defaultValue: ['option value 1', 'option value 3']
  },
};
export const ListSelectInput: Story = {
  args: {
    type: "list",
    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    options
  },
};

export const AutocompleteInput: Story = {
  args: {
    type: "autocomplete",

    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    options,
    defaultValue: "option value 4"
  },
};


export const RadioInput: Story = {
  args: {
    type: "radio",

    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    options
  },
};

export const CheckboxInput: Story = {
  args: {
    type: "checkbox",

    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    defaultValue: true
  },
};


export const SlideInput: Story = {
  args: {
    type: "slide",

    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    defaultValue: true
  },
};



export const ButtonsInput: Story = {
  args: {
    type: "buttons",

    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    defaultValue: "option value 1",
    options,
  },
};
export const ButtonsInputMultiple: Story = {
  args: {
    type: "buttons",

    name: "name",
    label: "Label",
    hint: "Label",
    suffixIcon: "info",
    prefixIcon: "info",
    suffixText: "suffix",
    prefixText: "prefix",
    defaultValue: "option value 1",
    multiple: true,
    options,
  },
};

export const GaugeInput: Story = {
  args: {
    type: "gauge",
    name: "name",
    label: "Label",
  },
};