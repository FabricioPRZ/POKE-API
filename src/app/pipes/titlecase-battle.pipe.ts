import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecaseBattle',
  standalone: true
})
export class TitlecaseBattlePipe implements PipeTransform {
  transform(value: string): string {
    return value.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
  }
}
