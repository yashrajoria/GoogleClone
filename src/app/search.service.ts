import { GoogleResponse } from './components/GoogleResponse.model';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  url: string = environment.SERVER_URL;
  api_key = environment.API_KEY;
  cx_key = environment.CX_KEY;

  constructor(private httpClient:HttpClient) { }

  getSearchData(searchTerm: string):Observable<GoogleResponse>{
    return this.httpClient.get<GoogleResponse>(`${this.url}`, {
      params:{
        key: this.api_key,
        cx: this.cx_key,
        q: searchTerm
      }
    });
  }
}
