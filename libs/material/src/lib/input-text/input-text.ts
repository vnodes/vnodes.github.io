import { Component, input } from '@angular/core';
import { outputFromObservable, toObservable } from '@angular/core/rxjs-interop';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs';
import { InputCommon } from '../input-common/input-common';
import { InputCommonModule } from '../input-common/input-common.module';


// <!-- 

//       < div > badInput: { { inputRef.validity.badInput } } </div>
//   < div > customError: { { inputRef.validity.customError } } </div>
//     < div > patternMismatch: { { inputRef.validity.patternMismatch } } </div>
//       < div > rangeOverflow: { { inputRef.validity.rangeOverflow } } </div>
//         < div > rangeUnderflow: { { inputRef.validity.rangeUnderflow } } </div>
//           < div > stepMismatch: { { inputRef.validity.stepMismatch } } </div>
//             < div > tooLong: { { inputRef.validity.tooLong } } </div>
//               < div > tooShort: { { inputRef.validity.tooShort } } </div>
//                 < div > typeMismatch: { { inputRef.validity.typeMismatch } } </div>
//                   < div > valid: { { inputRef.validity.valid } } </div>
//                     < div > valueMissing: { { inputRef.validity.valueMissing } } </div> -->


@Component({
  selector: 'vn-input-text',
  imports: [
    InputCommonModule
  ],
  templateUrl: './input-text.html',
  host: {
    class: "w-full!"
  }
})
export class InputText extends InputCommon<string> {

  minLength = input<number>(0);
  maxLength = input<number>(1000)



  onValueChange = outputFromObservable(toObservable(this.value).pipe(
    debounceTime(1000),
    distinctUntilChanged(),
    tap(value => {
      console.log("Change: ", value)
    })
  ))



}
