import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, Subscription, of } from 'rxjs';
import { SharedSubjectsService } from '../../shared-data/shared-subjects.service';
import { Books } from '../../books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnDestroy{
  bookList:Observable<Books[]>=of([]);
  books: Subscription;
  display=true;
  constructor(private fb: FormBuilder,
    private sharedSubjectsService:SharedSubjectsService) 
  {
    this.books=this.sharedSubjectsService.books.subscribe(data=>{
      this.bookList=of(data);
      if(data.length==0)
        this.display=false;
    });
   
  }

 

  ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.books.unsubscribe();
}
    

}
