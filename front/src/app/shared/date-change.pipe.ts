import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateChange',
})
export class DateChangePipe implements PipeTransform {
  constructor(private datePipe: DatePipe) {}

  transform(value: any): string | null {
    let format = 'dd/MM/yyyy HH:mm';
    return this.datePipe.transform(new Date(value), format);
  }
}
