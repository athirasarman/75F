import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Books } from '../../books';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SharedSubjectsService } from '../../shared-data/shared-subjects.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent {

  book: Books|undefined;
  bookMark:number;
  addressForm = this.fb.group({
   
  });

 
  constructor(private fb: FormBuilder,  private sharedSubjectsService:SharedSubjectsService,
    private route: ActivatedRoute,
    private location: Location) {
     let id:any= (this.route.snapshot.paramMap.get('id'));
    
     this.book=this.sharedSubjectsService.getBookDetails(id.toString());
     this.bookMark=this.sharedSubjectsService.bookmarkCount.getValue();
  }

 addBookMark()
 {
   this.bookMark++;
   this.sharedSubjectsService.bookmarkCount.next(this.bookMark);
 }
}
