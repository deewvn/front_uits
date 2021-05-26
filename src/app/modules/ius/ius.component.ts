import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ius',
  templateUrl: './ius.component.html',
  styleUrls: ['./ius.component.scss']
})
export class IusComponent implements OnInit {

  partnersList = [
    '/assets/img/aero.png',
    '/assets/img/kdv.png',
    '/assets/img/miratorg.png',
    '/assets/img/siemens.png',
    '/assets/img/gazprom.png',
    '/assets/img/efko.png',
    '/assets/img/baltika.png',
    '/assets/img/rusargo.png'
  ];

  aboutDescription = 'Объектами профессиональной деятельности выпускников кафедры являются автоматические и автоматизированные системы, средства контроля и  управления, сенсорика, робототехника, математическое и программное, обеспечение систем, методы, способы и средства их проектирования, в  различных отраслях национального хозяйства. <br/><br/> Уникальным и инновационным направлением кафедры является «Сервисное обеспечение геоинформационных систем государственного и муниципального управления». Оно отличается специализацией на разработку новых методов и технологий сбора, обработки и хранения данных, созданием электронных карт и картографических продуктов, эксплуатацией систем поддержки принятия управленческих решений государственными органами.';
  aboutHead = 'Хаустов Игорь Анатольевич';
  aboutPhoto = '/assets/img/haustov.png';

  galleryImgs = [
    '/assets/img/ius-life1.png',
    '/assets/img/ius-life2.png',
    '/assets/img/ius-life3.png',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
