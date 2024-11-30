import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ChoosePlansComponent } from "../choose-plans/choose-plans.component";

@Component({
  selector: 'app-home-main',
  standalone: true,
  imports: [RouterLink, ChoosePlansComponent],
  templateUrl: './home-main.component.html',
  styleUrl: './home-main.component.css',
})
export class HomeMainComponent {
  toggleMenu(): void {
    const menu = document.getElementById('mobile-menu');
    if (menu) {
        menu.classList.toggle('hidden');
    } else {
        console.error("Element with ID 'mobile-menu' not found.");
    }
}
}
