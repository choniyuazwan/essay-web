import { Component, OnInit } from '@angular/core';
import { QuranService } from './service/quran.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private quranService: QuranService) { }

  ngOnInit() {
    alert('dllasdlkal')
  }

  title = 'essay';
  key = 'islam';

  search() {
    this.quranService.getSimilar(this.key).subscribe(
      response => {
        if (response) {
          alert('success');
        } else {
          alert('failed')
        }
      }
    );
  }
}
