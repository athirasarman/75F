import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedSubjectsService {

  bookmarkCount:Subject<number>=new Subject<number>();
  books:Subject<any>=new Subject<any>();
  constructor() { }
}
