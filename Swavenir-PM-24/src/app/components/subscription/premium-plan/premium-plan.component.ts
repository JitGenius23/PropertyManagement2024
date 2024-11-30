import { Component } from '@angular/core';
import { SubscriptionCardComponent } from '../subscription-card/subscription-card.component';
import { BasicPlanComponent } from '../basic-plan/basic-plan.component';

@Component({
  selector: 'app-premium-plan',
  standalone: true,
  imports: [SubscriptionCardComponent, BasicPlanComponent],
  templateUrl: './premium-plan.component.html',
  styleUrl: './premium-plan.component.css'
})
export class PremiumPlanComponent {

}
