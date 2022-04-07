import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavService } from './nav.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {

  constructor(
    private navService: NavService
  ) {}

  ngOnInit() {
    this.navService.fetchGithubApi()
    .subscribe(data => console.log(data), error => console.log(error));
  }

}
