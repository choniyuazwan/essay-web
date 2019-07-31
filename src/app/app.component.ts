import { Component, OnInit } from '@angular/core';
import { QuranService } from './service/quran.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private quranService: QuranService) { }

  title = 'essay';
  key = '';

  similar: any
  translation: any

  search() {
    this.quranService.getSimilar(this.key).subscribe(
      response => {
        if(response) {
          this.similar = response
          console.log(this.similar)
        }
      }
    );

    this.quranService.getTranslation(this.key).subscribe(
      response => {
        if(response) {
          this.translation = response
          console.log(this.translation)
        }
      }
    );
  }

  fill(newKey) {
    this.key = newKey
    this.search() 
  }
}
