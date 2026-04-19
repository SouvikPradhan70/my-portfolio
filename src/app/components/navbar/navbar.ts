import { Component,HostListener  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  /* 🔥 SCROLL DETECTION */
  @HostListener('document:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
  }

}
