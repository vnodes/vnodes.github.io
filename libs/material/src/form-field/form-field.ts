import { Component, computed, input, model, OnInit, signal } from '@angular/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTimepicker, MatTimepickerInput, MatTimepickerToggle } from "@angular/material/timepicker";
import { Icon } from '@vnodes/material/common';
import { FieldsetComponent } from '@vnodes/material/fieldset';
import { NumberFilterDirective } from '@vnodes/material/number-filter';

export type FormFieldOption = {
  id?: any;
  value: any
  label?: string;
  icon?: Icon;
  avatar?: string;
  disabled?: boolean
  title?: string;
}

export type FormFieldType =
  | 'text'
  | "textarea"
  | 'tel'
  | 'email'
  | 'url'

  | 'number'
  | 'integer'

  | 'checkbox'
  | 'radio'
  | 'list'
  | 'buttons'

  | 'slide'
  | 'select'
  | 'autocomplete'

  | 'date'
  | 'time'





@Component({
  selector: 'vn-field',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatListModule,
    MatButtonToggleModule,
    MatAutocompleteModule,
    MatRadioModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    NumberFilterDirective,
    FieldsetComponent,
    MatTimepickerInput,
    MatTimepicker,
    MatTimepickerToggle,
    MatButtonToggleModule
  ],
  providers: [provideNativeDateAdapter()],
  template: `

Value : {{value()}}
<!-- Type -->
@let __type = type();

<!-- Input description -->
@let __name =name();
@let __id =id() ?? __name;
@let __label =label();
@let __labelPosition = labelPosition();
@let __hint =hint();
@let __placeholder =placeholder() ?? '';

@let __disabled = disabled(); 


@let __defaultValue =defaultValue();
@let __timeInterval = timeInterval();

<!-- Validation options  -->
@let __required =required();

@let __minlength =minlength();
@let __maxlength =maxlength();
@let __min =min();
@let __max =max();

<!-- Errors -->
@let __validationErrors =validationErrors();

<!-- Input options -->
@let __options = options();
@let __multiple = multiple();
@let __hideSingleSelectionIndicator = hideSingleSelectionIndicator();
@let __filteredOptions =filteredOptions();

@let __decimals = decimals();

<!-- Prefix/Suffix -->

@let __suffixText = suffixText();
@let __prefixText = prefixText();
@let __suffixIcon = suffixIcon();
@let __prefixIcon = prefixIcon();

@switch (__type) {


      <!-- Mat form field inputs -->
      @case("text")
      @case("number")
      @case("integer")
      @case('autocomplete')
      @case('select')
      { 
   
      <mat-form-field>

  
    
        <!-- Descriptions -->
        @if(__label) { <mat-label> {{__label}} </mat-label> }
        @if(__hint) {<mat-hint>  {{__hint}} </mat-hint> }  


        <!-- Errors -->
        @if(__validationErrors){    <mat-error> {{__validationErrors}} </mat-error> }


        <!-- Prefix/Suffix -->

        @if(__suffixText) { <span matTextSuffix> {{__suffixText}} </span> }
        @if(__prefixText) { <span matTextPrefix> {{__prefixText}} </span> }

        @if(__suffixIcon) { <mat-icon matIconSuffix> {{__suffixIcon}} </mat-icon> }
        @if(__prefixIcon) { <mat-icon matIconPrefix> {{__prefixIcon}} </mat-icon> }
      


        @switch (__type) {
          

          <!-- Text input -->
          @case ("text") {
            
            <input 
            type="text"
            autocomplete="off"
            matInput
            [id]="__id ??__name"
            [name]="__name"
            [defaultValue]="__defaultValue ?? ''"
            [placeholder]="__placeholder"
            [minLength]="__minlength"
            [maxLength]="__maxlength"
            [required]="__required"

            (blur)="handleTouchEvent()"
            (input)="handleInputEvent($event)"
            
            >
        }

        



        <!-- Number inputs -->
        @case ('number')
        @case ('integer'){ 
          <input 
            matInput
            type="text"
            autocomplete="off"
            inputmode="numeric"
            [value]="__defaultValue ?? ''"
            [id]="__id"
            [name]="__name"
            [placeholder]="__placeholder"
            [minLength]="__minlength ?? 0"
            [maxLength]="__maxlength ?? 22"
            [required]="__required"
            
            [min]="__min"
            [max]="__max"
            
            [vnNumberType]="__type==='integer' ? 'integer' : 'number'"
            [vnDecimals]="__decimals"
            vnNumberFilter
            
            (blur)="handleTouchEvent()"
            (input)="handleInputEvent($event)"
            
            >

        }


        <!-- Select input -->
        @case ('select'){ 
          <mat-select 
          [id]="__id"  
          [attr.name]="__name"
          [ariaLabel]="__label" 
          [multiple]="__multiple"
          [value]="__defaultValue"
          (openedChange)="handleTouchEvent()" 
          (selectionChange)="handleSelectValueChange($event)"  
          >
            @for(o of __options ; track o.id){ 
              <mat-option [value]="o.value" [disabled]="o.disabled">{{o.label}}</mat-option>
            }
            @if(__required!==true){ <mat-option [value]="null" >None</mat-option> }
          </mat-select>
        }
        

        <!-- Autocomplete input -->
        @case ('autocomplete'){ 
          <input 
            matInput
            type="text"
            [id]="__id"
            [name]="__name"
            autocomplete="off"
            [placeholder]="__placeholder"
            [disabled]="__disabled"
            [required]="__required"
            [matAutocomplete]="auto"
            [defaultValue]="__defaultValue??''"
            
            (blur)="handleTouchEvent()"
            (input)="handleInputEventForAutocomplete($event); "
            >
          <mat-autocomplete 
            #auto="matAutocomplete" 
            autoActiveFirstOption 
            (optionSelected)="handleValueChange($event.option.value)" 
            [autoActiveFirstOption]="true"
            >
            @for (option of __filteredOptions; track option.value) {
              <mat-option  [value]="option.value" [disabled]="option.disabled">{{option.value}}</mat-option>
            }
            @if(__required!==true){  <mat-option [value]="null">None</mat-option> }
          </mat-autocomplete>

          
        }
        
     
    }
    
  </mat-form-field>
  }



  <!-- Date picker -->
  @case ('date'){

    <mat-form-field>

        <!-- Descriptions -->
        @if(__label) { <mat-label> {{__label}} </mat-label> }
        @if(__hint) {<mat-hint>  {{__hint}} </mat-hint> }  


        <!-- Errors -->
        @if(__validationErrors){    <mat-error> {{__validationErrors}} </mat-error> }


        <!-- Prefix/Suffix -->

        @if(__suffixText) { <span matTextSuffix> {{__suffixText}} </span> }
        @if(__prefixText) { <span matTextPrefix> {{__prefixText}} </span> }

        @if(__suffixIcon) { <mat-icon matIconSuffix> {{__suffixIcon}} </mat-icon> }
        @if(__prefixIcon) { <mat-icon matIconPrefix> {{__prefixIcon}} </mat-icon> }
      


      <input 
        matInput 
        autocomplete="off"
        [id]="__id"
        [name]="__name"
        [defaultValue]="__defaultValue?? ''"
        [placeholder]="__placeholder" 
        [disabled]="__disabled"
        [matDatepicker]="picker" 
        [required]="__required" 
        (dblclick)="picker.open()"

        (dateChange)="handleValueChange($event.value)"
        (blur)="handleTouchEvent()"
        (input)="handleInputEvent($event)"
      >
      
      <mat-datepicker-toggle matIconSuffix [for]="picker"> </mat-datepicker-toggle>
      <mat-datepicker   #picker></mat-datepicker>
    </mat-form-field>
   }






  <!-- Date picker -->
  @case ('time'){

    <mat-form-field>

        <!-- Descriptions -->
        @if(__label) { <mat-label> {{__label}} </mat-label> }
        @if(__hint) {<mat-hint>  {{__hint}} </mat-hint> }  


        <!-- Errors -->
        @if(__validationErrors){    <mat-error> {{__validationErrors}} </mat-error> }


        <!-- Prefix/Suffix -->

        @if(__suffixText) { <span matTextSuffix> {{__suffixText}} </span> }
        @if(__prefixText) { <span matTextPrefix> {{__prefixText}} </span> }

        @if(__suffixIcon) { <mat-icon matIconSuffix> {{__suffixIcon}} </mat-icon> }
        @if(__prefixIcon) { <mat-icon matIconPrefix> {{__prefixIcon}} </mat-icon> }
      


      <input 
        
        #timeInput
        matInput 
        autocomplete="off"
        [id]="__id"
        [name]="__name"
        [placeholder]="__placeholder" 
        [disabled]="__disabled"
        [matTimepicker]="picker" 
        [required]="__required" 
        [max]="__max"
        [min]="__min"
        (dblclick)="picker.open()"

        [value]="__defaultValue ?? ''"
        (blur)="handleTouchEvent();"
        (input)="handleInputEvent($event)"
      >
      <mat-timepicker-toggle  matIconSuffix [for]="picker" >  </mat-timepicker-toggle>
      <mat-timepicker (selected)="handleValueChange($event.value);" #picker [interval]="__timeInterval" ></mat-timepicker>
    </mat-form-field>
   }



  <!-- None Mat form field inputs -->

  <!-- Radio group -->
  @case('radio'){ 
    <vn-fieldset [label]="__label ?? __name">
      <mat-radio-group [id]="__id" [name]="__name" (change)="handleValueChange($event.value)">
        @for(o of __options; track o.id){ 
          <mat-radio-button [id]="o.id" [value]="o.value">{{o.label}}</mat-radio-button>
        }
        @if(__required!==true){ <mat-radio-button  [value]="null">None</mat-radio-button> }
      </mat-radio-group>
    </vn-fieldset>
  }

<!-- Checkbox component -->
  @case("checkbox"){ 
    <mat-checkbox  
    [id]="__id"
    [name]="__name"
   
    (change)="handleValueChange($event.checked)"
    [labelPosition]="__labelPosition"
    >
    {{__label}}
    </mat-checkbox>
  }

  <!-- Slide Toggle -->
  @case('slide'){ 

      <mat-slide-toggle
        [id]="__id"
        [name]="__name"
        [disabled]="__disabled"
        [ariaLabel]="__label"
        [required]="__required"
        [labelPosition]="__labelPosition"
        (change)="handleValueChange($event.checked)"
      >
      {{__label}}
    </mat-slide-toggle>
  }


  <!-- List select -->
  @case('list'){ 


  <vn-fieldset [label]="__label??__name">
    <mat-selection-list 
      #ref
      [id]="__id"
      [attr.name]="__name"
      [multiple]="__multiple"
      [ariaLabel]="__label"
      
      (selectionChange)="handleValueChange(ref._value)"
      >

    @for (option of __options; track option) {
      <mat-list-option 
      [selected]="__defaultValue.find(e=>e===option.value)"  
      [value]="option.value"
      [disabled]="option.disabled"
      >
        <span matListItemLine>{{option.label}}</span>

        @if(option.icon){ <span matListItemIcon><mat-icon>info</mat-icon></span> }
        @if(option.avatar){ <img matListItemAvatar [src]="option.avatar" [alt]="option.label"> }      
        @if(option.title){ <span matListItemTitle>{{option.title}}</span> }
        
    
    </mat-list-option>
    }
  </mat-selection-list>
</vn-fieldset>
  }


  <!-- Button Toggle -->
  @case ("buttons") {
      <mat-button-toggle-group 
        [id]="__id"
        [name]="__name"
        [(value)]="value"
        [disabled]="__disabled"
        [multiple]="__multiple"
        [ariaLabel]="__label"
        [hideSingleSelectionIndicator]="__hideSingleSelectionIndicator"
        (valueChange)="handleValueChange($event)"
      >
      @for(option of __options; track option.value){ 
        <mat-button-toggle 
        [id]="option.id ?? option.label ?? option.value" 
        [disabled]="option.disabled" 
        [value]="option.value">
          {{option.label ?? option.value }}
        </mat-button-toggle>
      }
    </mat-button-toggle-group>
  }

  @default{}
}
  
  `,
})
export class FormFieldComponent implements OnInit {
  type = input<FormFieldType>('text');
  decimals = input<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10>(6);

  id = input<string | null>(null);
  name = input.required<string>();
  label = input<string | null>(null);
  labelPosition = input<'before' | 'after'>('after')
  placeholder = input<string | null>();
  hint = input<string | null>(null);
  disabled = input<boolean | null>(null);

  timeInterval = input<string>('5m')


  options = input<FormFieldOption[] | null>(null)

  multiple = input<boolean | null>(null);
  hideSingleSelectionIndicator = input<boolean | null>(null)

  filteredValue = signal<string>('');
  filteredOptions = computed(() => {
    return this.options()?.filter(e => e.value.startsWith(this.filteredValue()))
  })


  /** Suffix/Prefix */

  suffixText = input<string | null>(null);
  prefixText = input<string | null>(null);
  suffixIcon = input<Icon | null>(null);
  prefixIcon = input<Icon | null>(null);


  /** Valiation options  */
  required = input<boolean | null>(null);

  minlength = input<number | null>(null)
  maxlength = input<number | null>(null)

  min = input<number | null>(null)
  max = input<number | null>(null)



  // Value and value validation
  defaultValue = input<any>(null);
  value = model<any>(null);

  isTouched = model<boolean | null>(null);
  isDirty = model<boolean | null>(null);
  isInvalid = model<boolean | null>(null);
  isValid = model<boolean | null>(null);

  validationErrors = signal<string[] | null>(null);



  protected handleTouchEvent() {
    this.isTouched.set(true);
  }

  protected handleInputEventForAutocomplete(event: Event) {
    const inputValue = (event.target as HTMLInputElement).value;
    this.filteredValue.set(inputValue);
  }

  protected handleInputEvent(event: Event) {

    const inputValue = (event.target as HTMLInputElement).value;
    this.handleValueChange(inputValue);


  }

  protected handleSelectValueChange(event: MatSelectChange) {
    this.handleValueChange(event.value)
  }

  protected handleValueChange(value: any) {
    this.value.set(value);
    this.isDirty.set(true);
  }



  ngOnInit(): void {
    const __defaultValue = this.defaultValue();

    if (__defaultValue !== undefined && __defaultValue !== null) {
      this.value.set(__defaultValue)
    }
  }

}
