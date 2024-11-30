import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  NavigationStart,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  isSidebarOpen = false;
  isDropdownOpen: boolean = false;

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
}
