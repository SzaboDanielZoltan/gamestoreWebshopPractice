import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(baseArray: any[], key: string = '', direction: number = 1): any {
    if (key === '') {
      return baseArray;
    }

    if (key === 'orderdate') {
      baseArray.sort(function (a, b) {
        const diff = Math.abs(new Date(b.orderdate).getTime() - new Date(a.orderdate).getTime())
        return diff * direction;
      });
    } else {
      baseArray.sort((a, b) => {
        if (typeof a[key] === 'number') {
          return ((a[key] - b[key]) * direction);
        } else {
          return (a[key].toString() as string)
            .localeCompare(b[key].toString()) * direction;
        }
      });
    }

    return baseArray;
  }

}
