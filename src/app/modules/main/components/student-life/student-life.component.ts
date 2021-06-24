import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-life',
  templateUrl: './student-life.component.html',
  styleUrls: ['./student-life.component.scss']
})
export class StudentLifeComponent implements OnInit {

  cellsToShow = 3;

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
