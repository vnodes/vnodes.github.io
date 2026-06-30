import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonToggleComponent } from '@vnodes/material/button-toggle';
import { CheckboxComponent } from '@vnodes/material/checkbox';
import { FlexModule } from '@vnodes/material/flex';
import { FormModule } from '@vnodes/material/form';
import { InputNumberComponent } from '@vnodes/material/input-number';
import { InputTextComponent } from '@vnodes/material/input-text';
import { ListSelectComponent } from '@vnodes/material/list-select';
import { RadioComponent } from '@vnodes/material/radio';
import { SlideToggleComponent } from '@vnodes/material/slide-toggle';
import { InputValidator } from '@vnodes/material/validators';
import { InputOption } from '../input/input';
import { SelectComponent } from '../select/select';

@Component({
  selector: 'vn-form[product]',
  imports: [
    FormModule,
    ReactiveFormsModule,
    InputTextComponent,
    ListSelectComponent,
    InputNumberComponent,
    CheckboxComponent,
    SelectComponent,
    RadioComponent,
    SlideToggleComponent,
    ButtonToggleComponent,
    FlexModule,
    JsonPipe,
  ],
  template: `
    {{ formGroup.value | json }}
    <form
      vnForm
      vnFlexCol
      vnFlexGap
      [formGroup]="formGroup"
      (formSubmitEvet)="handleFormSubmit($event)"
    >
      <vn-input
        formControlName="name"
        type="text"
        [required]="true"
        label="Name"
      ></vn-input>
      <vn-input
        formControlName="description"
        type="text"
        [required]="true"
        label="Description"
      ></vn-input>
      <vn-input
        formControlName="upc"
        type="text"
        [required]="true"
        label="Unique Product Code"
      ></vn-input>
      <vn-input
        formControlName="serialNumber"
        type="text"
        [required]="true"
        label="Serial Number"
      ></vn-input>
      <vn-input
        formControlName="price"
        type="number"
        [decimals]="2"
        [required]="true"
        label="Price"
      ></vn-input>
      <vn-input
        formControlName="cost"
        type="number"
        [decimals]="2"
        [required]="true"
        label="Cost"
      ></vn-input>
      <vn-input
        formControlName="quantity"
        type="integer"
        [min]="0"
        [required]="true"
        label="Quantity"
      ></vn-input>
      <vn-input
        formControlName="category"
        type="select"
        [options]="categories"
        [defaultValue]="categories[0].value"
        [required]="true"
        label="Category"
      ></vn-input>
      <vn-input
        formControlName="supplier"
        type="list"
        [defaultValue]="suppliers[0].value"
        [options]="suppliers"
        [required]="true"
        label="Supplier"
      ></vn-input>
      <vn-input
        formControlName="size"
        type="button-toggle"
        [defaultValue]="sizes[0].value"
        [options]="sizes"
        [required]="true"
        label="Size"
      ></vn-input>
      <vn-input
        formControlName="store"
        type="radio"
        [options]="stores"
        [defaultValue]="stores[0].value"
        label="Store"
      ></vn-input>
      <vn-input
        formControlName="active"
        type="slider"
        label="Active"
      ></vn-input>
      <vn-input
        formControlName="onSale"
        type="checkbox"
        label="On Sale"
      ></vn-input>
    </form>
  `,
})
export class FormProduct {
  inputValidator = inject(InputValidator);
  formGroup = new FormGroup({
    name: new FormControl(null, []),
    description: new FormControl(null, [InputValidator.required]),
    upc: new FormControl(null, [InputValidator.required]),
    serialNumber: new FormControl(null, [InputValidator.required]),
    category: new FormControl(null, [InputValidator.required]),
    price: new FormControl(null, [InputValidator.required]),
    cost: new FormControl(null, [InputValidator.required]),
    quantity: new FormControl(null, [InputValidator.required]),
    supplier: new FormControl(null, [InputValidator.required]),
    size: new FormControl(null, [InputValidator.required]),
    store: new FormControl(null, [InputValidator.required]),
    active: new FormControl(null, [InputValidator.required]),
    onSale: new FormControl(null, [InputValidator.required]),
  });

  suppliers: InputOption<number>[] = [
    { value: 1, label: 'Supplier 1' },
    { value: 2, label: 'Supplier 2' },
    { value: 3, label: 'Supplier 3' },
    { value: 4, label: 'Supplier 4' },
    { value: 5, label: 'Supplier 5' },
  ];

  sizes: InputOption<string>[] = [
    { value: 'XS', label: 'XS' },
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },
  ];

  categories: InputOption<number>[] = [
    { value: 1, label: 'Category 1' },
    { value: 2, label: 'Category 2' },
    { value: 3, label: 'Category 3' },
    { value: 4, label: 'Category 4' },
  ];

  stores: InputOption<number>[] = [
    { value: 1, label: 'Store 1' },
    { value: 2, label: 'Store 2' },
    { value: 3, label: 'Store 3' },
    { value: 4, label: 'Store 4' },
  ];

  handleFormSubmit(value: any) {
    console.log('Addredd form submit: ', value);
  }
}
