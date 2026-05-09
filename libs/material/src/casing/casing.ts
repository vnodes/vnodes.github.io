import { Pipe, PipeTransform } from '@angular/core';
import { names } from '@vnodes/names';


/**
 * Casing type camel, pascal, kebab, snake, constant, title, sentence, dot
 */
export type CasingType = keyof ReturnType<typeof names>

/**
 * Casing transform pipe 
 */
@Pipe({ name: 'casing', standalone: true })
export class CasingPipe implements PipeTransform {
  transform(value: any, type: CasingType) {
    if (typeof value === 'string') {
      return names(value)[type]
    }
    return value
  }
}
