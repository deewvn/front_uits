import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ukmt',
  templateUrl: './ukmt.component.html',
  styleUrls: ['./ukmt.component.scss']
})
export class UkmtComponent implements OnInit {

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

  aboutDescription = 'В процессе обучения студенты получают фундаментальные знания не только в области компьютерной техники и технологии, но и в предметной области применения информационных систем с учетом особенностей предприятий химической и пищевой промышленности.<br/><br/> Объектами профессиональной деятельности выпускников являются информационные системы и сети, их математическое, информационное и программное обеспечение, способы и методы проектирования, отладки, разработки и эксплуатации, используемые на предприятиях различных отраслей народного хозяйства.<br/><br/> Выпускники кафедры востребованы на предприятиях пищевой, химической промышленности, банковской сфере, сфере торговли и услуг, а также в организациях разрабатывающих программное обеспечение для бизнес-процессов компаний различного профиля деятельности.';
  aboutHead = 'Сайко Дмитрий Сергеевич';
  aboutPhoto = '/assets/img/no-photo.png';

  galleryImgs = [
    '/assets/img/vmit-life.png',
    '/assets/img/vmit-life2.png',
    '/assets/img/vmit-life3.png',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
