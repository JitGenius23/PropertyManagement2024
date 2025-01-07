import { Routes } from '@angular/router';
import { PropertiesComponent } from './dashboard/properties/properties.component';

import { LoginComponent } from './authentication/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { SignupP1Component } from './authentication/signup-p1/signup-p1.component';
import { SignupP2Component } from './authentication/signup-p2/signup-p2.component';

import { authGuard } from './auth.guard';
import { PageNotFoundComponent } from './errorPage/page-not-found/page-not-found.component';
import { ChoosePlansComponent } from './components/choose-plans/choose-plans.component';

import { AdmindashComponent } from './admindash/admindash.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeMainComponent,
    pathMatch: 'full',
    title: 'Home page',
  },
  {
    path: 'login',
    component: LoginComponent,
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
    path: '',
    component: DashboardComponent,
    title: 'Dashboard',
    canActivate: [authGuard],
    children: [
      {
        path: 'properties',
        component: PropertiesComponent,
        canActivate: [authGuard],
      },
      {
        path: 'gallery',
        loadComponent: () =>
          import('./dashboard/gallery/gallery.component').then(
            (m) => m.GalleryComponent
          ),
        children: [
          {
            path: 'pictureVideo',
            loadComponent: () =>
              import('./components/picture-video/picture-video.component').then(
                (m) => m.PictureVideoComponent
              ),
            outlet: 'pictureVideo',
          },
        ],
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./dashboard/reports/reports.component').then(
            (m) => m.ReportsComponent
          ),
      },
      {
        path: 'support',
        loadComponent: () =>
          import('./dashboard/support/support.component').then(
            (m) => m.SupportComponent
          ),
      },
    ],
  },
  {
    path: 'propertyType',
    loadComponent: () =>
      import(
        './components/add-New-Property/property-type/property-type.component'
      ).then((m) => m.PropertyTypeComponent),
    canActivate: [authGuard],
  },
  {
    path: 'propertyDetails',
    loadComponent: () =>
      import(
        './components/add-New-Property/property-details/property-details.component'
      ).then((m) => m.PropertyDetailsComponent),
    canActivate: [authGuard],
  },
  {
    path: 'choosePlans',
    // loadComponent: () =>
    //   import('./components/choose-plans/choose-plans.component').then(
    //     (m) => m.ChoosePlansComponent
    //   ),
    component: ChoosePlansComponent,
    canActivate: [authGuard],
  },
  {
    path: 'paymentPage',
    loadComponent: () =>
      import('./payment-page/payment-page.component').then(
        (m) => m.PaymentPageComponent
      ),
    canActivate: [authGuard],
  },
  {
    path: 'admin',
    component: AdmindashComponent,
    canActivate: [authGuard],
  },
  { path: '**', component: PageNotFoundComponent },
];
