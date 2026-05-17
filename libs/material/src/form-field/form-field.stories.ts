import type { Meta, StoryObj } from '@storybook/angular';
import { FormFieldComponent } from './form-field';

const meta: Meta<FormFieldComponent> = {
  component: FormFieldComponent,
  title: 'FormField',
};
export default meta;

type Story = StoryObj<FormFieldComponent>;

export const TextInputRequired: Story = {
  args: {
    type: "text",
    name: "name",
    label: "Label",
    hint: "Label",
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
    prefixIcon: "info",
    suffixIcon: "info",
    prefixText: "Count :",
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
    defaultValue: new Date()
  },
};


export const SelectInput: Story = {
  args: {
    type: "select",
    name: "name",
    label: "Label",
    hint: "Label",
    options: [
      { id: 1, label: "Option 1", value: "option value 1" },
      { id: 2, label: "Option 2", value: "option value 2" },
      { id: 3, label: "Option 3", value: "option value 3" },
      { id: 4, label: "Option 4", value: "option value 4" },
      { id: 5, label: "Option 5", value: "option value 5", disabled: true },
    ],
    defaultValue: "option value 5"
  },
};


export const ListSelectInput: Story = {
  args: {
    type: "list",
    name: "name",
    label: "Label",
    hint: "Label",
    multiple: true,
    options: [
      { id: 1, label: "Option 1", value: "option value 1" },
      { id: 2, label: "Option 2", value: "option value 2" },
      { id: 3, label: "Option 3", value: "option value 3" },
      { id: 4, label: "Option 4", value: "option value 4" },
    ],
    defaultValue: ['option value 1', 'option value 3']
  },
};

export const AutocompleteInput: Story = {
  args: {
    type: "autocomplete",
    name: "name",
    label: "Label",
    hint: "Label",
    options: [
      { id: 1, label: "Option 1", value: "option value 1" },
      { id: 2, label: "Option 2", value: "option value 2" },
      { id: 3, label: "Option 3", value: "option value 3", disabled: true },
      { id: 4, label: "Option 4", value: "option value 4" },
    ],
    defaultValue: "option value 4"
  },
};


export const RadioInput: Story = {
  args: {
    type: "radio",
    name: "name",
    label: "Label",
    hint: "Label",
    options: [
      { id: 1, label: "Option 1", value: "option value 1" },
      { id: 2, label: "Option 2", value: "option value 2" },
      { id: 3, label: "Option 3", value: "option value 3" },
      { id: 4, label: "Option 4", value: "option value 4" },
    ]
  },
};

export const CheckboxInput: Story = {
  args: {
    type: "checkbox",
    name: "name",
    label: "Label",
    hint: "Label",
    value: true
  },
};


export const SlideInput: Story = {
  args: {
    type: "slide",
    name: "name",
    label: "Label",
    hint: "Label",
    value: true
  },
};



export const ButtonsInput: Story = {
  args: {
    type: "buttons",
    name: "name",
    label: "Label",
    hint: "Label",
    defaultValue: "option value 1",
    options: [
      { value: "option value 1" },
      { value: "option value 2" },
      { value: "option value 3" },
      { value: "option value 4" },
    ]
  },
};
export const ButtonsInputMultiple: Story = {
  args: {
    type: "buttons",
    name: "name",
    label: "Label",
    hint: "Label",
    defaultValue: "option value 1",
    multiple: true,
    options: [
      { value: "option value 1" },
      { value: "option value 2" },
      { value: "option value 3" },
      { value: "option value 4" },
    ]
  },
};