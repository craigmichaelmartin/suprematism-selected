import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'truthyKeys' })
export class TruthyKeysPipe implements PipeTransform {

  transform(obj) {
    return Object.keys(obj).filter(key => !!obj[key]);
  }

}

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {

  transform(obj) {
    return Object.keys(obj);
  }

}
