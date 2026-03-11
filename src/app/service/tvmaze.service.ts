import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvmazeService {
BaseYrl: string=`https://api.tvmaze.com`
productUrl: string=`http://dummyjson.com`
  constructor() { }
}
