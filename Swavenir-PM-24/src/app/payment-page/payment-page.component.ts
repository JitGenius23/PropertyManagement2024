import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css',
})
export class PaymentPageComponent {
  selectedMethod: string | null = null;

  togglePaymentMethod(method: string): void {
    this.selectedMethod = this.selectedMethod === method ? null : method;
  }
}
