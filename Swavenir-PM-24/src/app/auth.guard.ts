import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  let isLoggedIn = sessionStorage.getItem('isLoggedIn');
  // console.log('authGuard returning:', isLoggedIn === 'false' ? false : true);
  // return isLoggedIn === 'false' ? false : true;
  if (isLoggedIn === 'false') {
    alert('Please login first');
    _router.navigate(['/login']);
    return false;
  }
  return true;
};
