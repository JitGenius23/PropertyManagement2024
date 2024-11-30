import { Component } from '@angular/core';
import { PropertyCardComponent } from "../../components/property-card/property-card.component";
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-properties',
  standalone: true, 
  imports: [PropertyCardComponent, RouterLink],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {

 
}
