import { Injectable } from '@angular/core';
import { WeekwiseReadership } from '../weekwise-readership';
import { WeekwiseReadershipData } from '../readership';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  weekwiseReadershipData:WeekwiseReadership[];
  constructor() {
     this.weekwiseReadershipData=WeekwiseReadershipData;
   }

   getWeekWiseData():WeekwiseReadership[]{
     return this.weekwiseReadershipData;
   }
}
