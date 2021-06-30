import { Injectable } from '@angular/core';
import { Subject,Observable,of, BehaviorSubject } from 'rxjs';
import { Books } from '../books';
import { BookList } from '../landing';

@Injectable({
  providedIn: 'root'
})
export class SharedSubjectsService {

  bookmarkCount:BehaviorSubject<number>=new BehaviorSubject<number>(0);
  books:BehaviorSubject<Books[]>=new BehaviorSubject<Books[]>(BookList);
  constructor() {
     
   }

getBooks():Observable<any>{
   return this.books.asObservable();
}
}
