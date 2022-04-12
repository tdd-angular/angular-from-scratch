import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterState } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.scss']
})
export class ApproveComponent implements OnInit {
  request: any;

  constructor(
    private service: UserService,
    private router: ActivatedRoute
    ) { }

  ngOnInit(): void {
  this.request =   this.service.getRequest()
  .find(
    x => x.id.toString() == (this.router.snapshot.paramMap.get('id') as string));
  }

}
