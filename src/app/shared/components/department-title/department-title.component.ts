import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-department-title',
  templateUrl: './department-title.component.html',
  styleUrls: ['./department-title.component.scss']
})
export class DepartmentTitleComponent implements OnInit {

  @Input() bgImg: string;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  bgStyles() {
    return `background: linear-gradient(90deg, rgba(41, 46, 138, 0.9) 0%, rgba(243, 61, 135, 0.9) 100%), url(${this.bgImg});`;
  }

}
