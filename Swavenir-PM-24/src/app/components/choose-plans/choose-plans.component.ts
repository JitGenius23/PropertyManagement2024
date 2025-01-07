import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
// import { AuthService } from '../auth.service';

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

  // constructor(private authservice:AuthService, private router: Router){}

  // choosePlan(plan: any) {
  //   if(this.authservice.isAuthenticated()) {
  //     this.router.navigate(['/propertyType'])
  //   } else {
  //     this.router.navigate(['/login'])
  //   }
  // }

}
