import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuranService {

  constructor(private httpClient: HttpClient) { }

  path = 'http://localhost:4000';

  getSimilar(key) {
    let url = `${this.path}/similar?key=${key}`;
    return this.httpClient.get(url);
  }

  getTranslation(key) {
    let url = `${this.path}/translation?key=${key}`;
    return this.httpClient.get(url);
  }
}
