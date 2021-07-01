import { Component } from '@angular/core';
import { FormBuilder, Validators,FormControl } from '@angular/forms';
import { SharedSubjectsService } from '../../shared-data/shared-subjects.service';
import { Books } from '../../books';
import { Observable, Subscription, of } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  term="";
  searchTerm=new FormControl();
  search = this.fb.group({
   searchTerm:new FormControl()
  });

  
  constructor(private fb: FormBuilder,private sharedSubjectsService:SharedSubjectsService) {}

  onSubmit(): void {
   let term=this.searchTerm.value;
   let result:Books[]=[] as Books[];
   this.sharedSubjectsService.resetBookList();
   let bookList=this.sharedSubjectsService.books.getValue();
   if (term.trim()) {
      // if not search term, return empty array.
       for(var book of bookList)
       {
         if((term.toLowerCase()===book.genre.toLowerCase())||(term.toLowerCase()===book.name.toLowerCase()))
         {
           result.push(book);
         }
       }
        this.sharedSubjectsService.books.next(result);
    }
  }
}
