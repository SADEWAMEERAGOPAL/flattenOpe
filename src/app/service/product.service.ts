
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private  readonly Baseurl: string = environment.ProductUrl;
  private readonly SearchUrl: string = `${this.Baseurl}/products/search`;

  constructor(private http: HttpClient) {}

  FetchSearchedproduct(query: string): Observable<any> {

    const params = new HttpParams().set('q', query);

    return this.http.get(this.SearchUrl, { params });
  }
}
