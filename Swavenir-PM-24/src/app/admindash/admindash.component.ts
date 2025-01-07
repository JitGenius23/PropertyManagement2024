import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admindash',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, RouterLinkActive],
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css',
})
export class AdmindashComponent {
  isSidebarOpen = false;
  isDropdownOpen: boolean = false;
  activeRouterLink: string = '';

  routeNames: { [key: string]: string } = {
    '/properties': 'Properties',
    '/gallery': 'Gallery',
    '/reports': 'Reports',
    '/support': 'Support',
  };

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.activeRouterLink = this.routeNames[event.url] || '';
      }
    });
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    const hamburger = document.querySelector('.hamburgurmenu') as HTMLElement;
    hamburger.style.visibility = this.isSidebarOpen ? 'hidden' : 'visible';
  }
  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  sidebarToggle() {
    this.isSidebarOpen = false;
    this.isDropdownOpen = false;
  }

  // logout
  logout() {
    if (confirm('are you sure to logout?')) {
      sessionStorage.setItem('isLoggedIn', 'false');
      this.router.navigate(['/']);
    }
  }
}
