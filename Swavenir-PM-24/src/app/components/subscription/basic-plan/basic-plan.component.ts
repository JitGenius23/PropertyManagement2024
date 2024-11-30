import { Component } from '@angular/core';
import { SubscriptionCardComponent } from '../subscription-card/subscription-card.component';

@Component({
  selector: 'app-basic-plan',
  standalone: true,
  imports: [SubscriptionCardComponent],
  templateUrl: './basic-plan.component.html',
  styleUrl: './basic-plan.component.css'
})
export class BasicPlanComponent {

}
