import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ib',
  templateUrl: './ib.component.html',
  styleUrls: ['./ib.component.scss']
})
export class IbComponent implements OnInit {

  partnersList = [
    '/assets/img/sber.png',
    '/assets/img/nlmk.png',
    '/assets/img/fstec.png',
    '/assets/img/rosneft.png',
    '/assets/img/gazprom.png',
    '/assets/img/efko.png',
    '/assets/img/belagro.png',
    '/assets/img/domini.png'
  ];

  aboutDescription = 'Специализация – «Безопасность открытых информационных систем» <br/><br/>Специалисты по информационной безопасности необходимы для каждого современного предприятия. Контроль работоспособности и эффективности применяемых программно-аппаратных, криптографических и технических средств защиты – основная задача выпускников этой специальности. Специалисты по инфобезопасности занимаются научно-исследовательскими разработками средств защиты автоматизированных систем, обеспечивают безопасную работу систем обработки информации, участвуют в аттестации и лицензировании средств защиты персональных и производственных данных.<br/><br/>Образовательный процесс направлен на формирование у выпускников компетенций, позволяющих разрабатывать проектные';
  aboutHead = 'Скрыпников Алексей Васильевич';
  aboutPhoto = '/assets/img/skripnikov.png';

  galleryImgs = [
    '/assets/img/ib-life1.png',
    '/assets/img/ib-life2.png',
    '/assets/img/ib-life3.png',
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
