import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {
  
  transform(value: any): number{
  let today:Date = new Date();//get current date and time
  let todayWithNoTime:any = new Date(today.getFullYear(),today.getMonth(),today.getDate())
  var dateDifference = Math.abs(value-todayWithNoTime)//returns the value in milliseconds
  const secondsInADay = 86400;

  var dateDifferentSeconds = dateDifference*0.001;//convert to seconds

  var dateCounter = dateDifferentSeconds/secondsInADay;

  if(dateCounter >=1 && value > todayWithNoTime){
    return dateCounter;
  } else {
    return 0;
  }
  }

}
