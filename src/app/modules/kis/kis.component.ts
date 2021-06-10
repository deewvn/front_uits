import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kis',
  templateUrl: './kis.component.html',
  styleUrls: ['./kis.component.scss']
})
export class KisComponent implements OnInit {

  partnersList = [
    '/assets/img/dataart.png',
    '/assets/img/angelsit.png',
    '/assets/img/atos.png',
    '/assets/img/rosneft.png',
    '/assets/img/gazprom.png',
    '/assets/img/efko.png',
    '/assets/img/belagro.png',
    '/assets/img/domini.png'
  ];

  aboutDescription = 'Кафедра корпоративных информационных систем и программирования осуществляет подготовку бакалавров и магистров по направлению «Информационные системы и технологии».<br/><br/> Специалисты будут подготовлены к профессиональной деятельности в качестве: бизнес-аналитиков, IT-консультантов, системных архитекторов, системных интеграторов, проектировщиков и специалистов по внедрению корпоративных интегрированных информационных систем, которые занимаются проектированием, внедрением, анализом и сопровождением корпоративных информационных систем управления предприятиями и организациями на основе процессного подхода.';
  aboutHead = 'Стукало Оксана Георгиевна';
  aboutPhoto = '/assets/img/no-photo.png';

  galleryImgs = [
    '/assets/img/kis-life.png',
    '/assets/img/kis-life2.png',
    '/assets/img/kis-life3.png',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
