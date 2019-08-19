import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(array, filter: string = '', genreFilter: string = ''): any {
    if (genreFilter === '') {
      return array.filter(product =>
        (product.title.toLowerCase().indexOf(filter.toLowerCase()) > -1));
    } else {
      return array.filter(product =>
        (product.type.toLowerCase().indexOf(genreFilter.toLowerCase()) > -1));
    }
  }
}
