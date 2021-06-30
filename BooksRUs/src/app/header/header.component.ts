import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable,of,Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { SharedSubjectsService } from '../shared-data/shared-subjects.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnDestroy {
  bookmarkCount:Observable<number>=of(0);
  count: Subscription;
  constructor(private sharedSubjectsService:SharedSubjectsService) {
    this.count=this.sharedSubjectsService.bookmarkCount.subscribe(data=>{
      this.bookmarkCount=of(data);
      
    });
  }

   ngOnDestroy(): void {
    
  }

}
