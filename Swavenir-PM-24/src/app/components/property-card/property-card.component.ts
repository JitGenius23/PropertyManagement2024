import { Component } from '@angular/core';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css',
})
export class PropertyCardComponent {
  toggleExtraInfo() {
    const extraInfo = document.getElementById('extra-info') as HTMLElement;
    const toggleButton = document.getElementById('toggle-info') as HTMLElement;

    if (extraInfo.classList.contains('hidden')) {
      extraInfo.classList.remove('hidden');
      toggleButton.innerText = 'Show less';
    } else {
      extraInfo.classList.add('hidden');
      toggleButton.innerText = 'More info';
    }
  }
}
