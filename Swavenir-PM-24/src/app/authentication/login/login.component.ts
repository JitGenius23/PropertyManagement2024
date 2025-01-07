import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor(private router: Router) {}

  onSubmit(logindata: NgForm) {
    if(logindata.valid) {
      const {userid, password} = logindata.value;
      this.onLogin(userid, password);
    } else {
      console.log('form is invalid');
    }
  }

  onLogin(userid: any, password: any) {
    if (userid === 'admin' && password === 'admin123') {
      sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/properties']);
    } else if (userid === 'user' && password === 'user123') {
      // alert('Invalid credentials');
      sessionStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/admin']);
    } else {
      sessionStorage.setItem('isLoggedIn', 'false');
    }
  }
}
