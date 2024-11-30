import { Component, Input } from '@angular/core';
import { Route } from '@angular/router';
import { routes } from '../../../app.routes';

@Component({
  selector: 'app-subscription-card',
  standalone: true,
  imports: [],
  templateUrl: './subscription-card.component.html',
  styleUrl: './subscription-card.component.css'
})
export class SubscriptionCardComponent {

  constructor(){}

  @Input() plans: string = '';
  @Input() price: number = 0;
  @Input() monthCount: number = 0;
  @Input() photoCount: number = 0;
  @Input() videoCount: number = 0;
  @Input() liveVideoCount: number = 0;

  onChoosePlan() {
     
  }
 
}
