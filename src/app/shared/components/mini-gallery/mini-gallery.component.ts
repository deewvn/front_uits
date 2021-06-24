import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-gallery',
  templateUrl: './mini-gallery.component.html',
  styleUrls: ['./mini-gallery.component.scss']
})
export class MiniGalleryComponent implements OnInit {
  cellsToShow = 3;
  @Input() images: string[];

  constructor() {
    if (window.innerWidth <= 1420) {
      this.cellsToShow = 1;
    }
  }

  ngOnInit(): void {
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 1420) {
        this.cellsToShow = 1;
      } else {
        this.cellsToShow = 3;
      }
    });
  }

}
