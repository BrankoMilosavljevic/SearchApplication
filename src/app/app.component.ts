import { Component } from '@angular/core';
import { SearchService } from './api/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Search Brewery Website';
  searchResult: string;

  constructor(private searchService: SearchService) { }

  public search(value: string) {
    this.searchService.search(value)
                      .subscribe((searchResult) => {
                        this.searchResult = searchResult.result;
                      },
                      error => {
                        this.searchResult = 'Error occured during the search';
                      });
  }
}
