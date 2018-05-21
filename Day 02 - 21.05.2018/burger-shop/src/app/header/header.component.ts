import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
shopName:string="Matrix Burger Shop"
  imgSrc:string="assets/images/logo.jpg"
  constructor() { }

  ngOnInit() {
  }

}
