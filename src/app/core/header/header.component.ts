import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lel-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'Testing with Angular';
  }

}
