import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kilimaTranslation'
})
export class KilimaTranslationPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
