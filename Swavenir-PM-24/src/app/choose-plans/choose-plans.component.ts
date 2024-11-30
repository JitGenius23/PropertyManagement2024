import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-choose-plans',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './choose-plans.component.html',
  styleUrl: './choose-plans.component.css',
})
export class ChoosePlansComponent {
  plans = [
    {
      name: '6-month Plan',
      description: 'Weekly Reports',
      price: '2999/month',
    },
    {
      name: '12-month Plan',
      description: 'Fortnightly Reports',
      price: '2499/month',
    },
    {
      name: '24-month Plan',
      description: 'Fortnightly Reports',
      price: '2099/month',
    },
  ];
}
