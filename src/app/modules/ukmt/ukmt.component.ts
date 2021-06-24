import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ukmt',
  templateUrl: './ukmt.component.html',
  styleUrls: ['./ukmt.component.scss']
})
export class UkmtComponent implements OnInit {

  partnersList = [
    '/assets/img/molvest.png',
    '/assets/img/fosforel.png',
    '/assets/img/atos.png',
    '/assets/img/rosneft.png',
    '/assets/img/gazprom.png',
    '/assets/img/efko.png',
    '/assets/img/belagro.png',
    '/assets/img/kach.png'
  ];

  aboutDescription = 'Управление качеством, стандартизация и метрология – одни из самых молодых и перспективных направлений подготовки современного высшего образования, новая область профессиональной деятельности, формирующаяся на стыке организации производства и обеспечения ее качества в соответствии с международными стандартами.<br/><br/> В связи с бурным развитием аквакультуры в нашей стране на кафедре УКиТВБ готовят квалифицированные кадры для АПК в области рыбного хозяйства по направлению подготовки «Водные биоресурсы и аквакультура», основная задача которых – контроль над состоянием водных биосистем, изучение акваторий и их обитателей, разработка и внедрение методик улучшения качества и увеличения количества выращиваемых объектов аквакультуры.<br/><br/> Выпускники востребованы в крупных рыбоводческих хозяйствах различных уровней, в том числе на небольших частных предприятиях, имеющих туристическую направленность, научно-исследовательских институтах, рыбоперерабатывающих предприятиях.';
  aboutHead = 'Дворянинова Ольга Павловна';
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
