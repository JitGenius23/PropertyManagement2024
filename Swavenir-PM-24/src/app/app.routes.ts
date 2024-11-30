import { Routes } from '@angular/router';
import { PropertiesComponent } from './dashboard/properties/properties.component';
import { GalleryComponent } from './dashboard/gallery/gallery.component';
import { ReportsComponent } from './dashboard/reports/reports.component';
import { SupportComponent } from './dashboard/support/support.component';
import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { SignupP1Component } from './authentication/signup-p1/signup-p1.component';
import { SignupP2Component } from './authentication/signup-p2/signup-p2.component';
import { InsiderGalleryComponent } from './dashboard/gallery/insider-gallery/insider-gallery.component';
import { PropertyTypeComponent } from './components/add-New-Property/property-type/property-type.component';
import { PropertyDetailsComponent } from './components/add-New-Property/property-details/property-details.component';
import { ChoosePlansComponent } from './choose-plans/choose-plans.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeMainComponent,
  },
  {
    path: 'SignupP1',
    component: SignupP1Component,
  },
  {
    path: 'SignupP2',
    component: SignupP2Component,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'properties',
        component: PropertiesComponent,
      },
      {
        path: 'gallery',
        component: GalleryComponent,
        children: [
          {
            path: 'insider-gallery',
            component: InsiderGalleryComponent,
          },
        ],
      },
      {
        path: 'reports',
        component: ReportsComponent,
      },
      {
        path: 'support',
        component: SupportComponent,
      },
    ],
  },
  { path: 'propertyType', component: PropertyTypeComponent },
  { path: 'propertyDetails', component: PropertyDetailsComponent },
  { path: 'choosePlans', component: ChoosePlansComponent },
  { path: 'paymentPage', component: PaymentPageComponent},
];
