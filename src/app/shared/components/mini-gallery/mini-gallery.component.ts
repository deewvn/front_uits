import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-gallery',
  templateUrl: './mini-gallery.component.html',
  styleUrls: ['./mini-gallery.component.scss']
})
export class MiniGalleryComponent implements OnInit {

  @Input() images: string[];

  constructor() { }

  ngOnInit(): void {
  }

}
