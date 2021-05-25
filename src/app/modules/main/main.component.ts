import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  partnerList = [
    '/assets/img/dataart.png',
    '/assets/img/angelsit.png',
    '/assets/img/atos.png',
    '/assets/img/siemens.png',
    '/assets/img/gazprom.png',
    '/assets/img/efko.png',
    '/assets/img/baltika.png',
    '/assets/img/ekoniva.png',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
