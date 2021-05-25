import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  get isRoot(): boolean {
    return this.router.url === '/' || this.router.url === '' || this.router.url.includes('#');
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isActive(path: string): boolean {
    return this.router.url.includes(path) && !this.router.url.includes('#');
  }

  goTo(e, href: string): void {
    e.preventDefault();
    if (href !== 'contacts') {
      this.router.navigateByUrl('/');
    }
    setTimeout(() => document.getElementById(href).scrollIntoView({ block: 'start', behavior: 'smooth' }), 200);
  }
}
