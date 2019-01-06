import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchResult } from '../models/search-result.model';

@Injectable()
export class SearchService {
  private searchUrl = 'https://api.openbrewerydb.org/breweries?by_name=';

  constructor(private http: HttpClient) { }

  search(term: string): Observable<SearchResult> {
    return this.http.get(`${this.searchUrl}${term}`)
                    .pipe(map((response: any) => SearchResult.fromObject(response)));
  }
}
