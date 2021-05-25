import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-department-about',
  templateUrl: './department-about.component.html',
  styleUrls: ['./department-about.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class DepartmentAboutComponent implements OnInit {
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
