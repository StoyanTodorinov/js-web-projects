import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  success: boolean;
  authService: AuthenticationService;
  logged: boolean;
  router: Router;

  constructor(authService: AuthenticationService, router: Router) {
    this.authService = authService;
    this.logged = this.authService.checkIfLoggedIn() ? true : false;
    this.router = router;
  }

  ngOnInit() { }

  logout() {
    this.authService.logout().subscribe(data => {
      localStorage.removeItem('username');
      localStorage.removeItem('authtoken');
      this.router.navigateByUrl('/login');
    })
  }
}
