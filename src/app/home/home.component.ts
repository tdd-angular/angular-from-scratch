import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  users: any;

  constructor(private router: Router, private request: UserService) { 
    this.users =   request.getRequest();
  }

  reject(user: any) {
    this.router.navigate(['/reject', user.id]);
  }
}
