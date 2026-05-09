import { Pipe, PipeTransform } from '@angular/core';
import { names } from '@vnodes/names';

@Pipe({ name: 'pascalcase' })
export class PascalcasePipe implements PipeTransform {

  transform(value: any) {
    if (typeof value === 'string') {
      return names(value).pascal
    }
    return value
  }


}
