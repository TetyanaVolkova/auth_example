import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe'
})
export class SearchPipe implements PipeTransform {

  transform( value: any, filterString: string, propName: string ): any {
    if ( value.length === 0 || filterString === '' ) {
      return value;
    }
    const resultArray = [];
    for ( const item of value ) {
      if ( item[propName] !== null ) {
        const lowerCaseCrsName = item[propName].toLowerCase();
        const lowerCaseInputName = filterString.toLowerCase();
        console.log(lowerCaseCrsName, lowerCaseInputName);
        console.log(lowerCaseCrsName.includes(lowerCaseInputName));
        if ( lowerCaseCrsName.includes(lowerCaseInputName) ) {
          resultArray.push(item);
        }
      }
    }
    return resultArray;
  }

}
