import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'core-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userName: string
  constructor() { }

  ngOnInit(): void {
  }

}
