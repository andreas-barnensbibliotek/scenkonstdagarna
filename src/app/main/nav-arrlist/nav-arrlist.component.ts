import { Router } from '@angular/router';
import { LocationStrategy, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-arrlist',
  templateUrl: './nav-arrlist.component.html',
  styleUrls: ['./nav-arrlist.component.scss']
})
export class NavArrlistComponent implements OnInit {

  constructor(private location:LocationStrategy, private _router:Router, private vps: ViewportScroller,) { }

  ngOnInit(): void {
  }

  gotoSection(section:any){
    this.scrollsection(section);
  }

  scroll(skrivid:any) {
    document.querySelector(skrivid).scrollIntoView({behavior: 'smooth'});
  }

  scrollsection(section:any) {
    // console.log("test")
    // document.querySelector(skrivid).scrollIntoView({behavior: 'smooth'});
    this.vps.scrollToAnchor(section)
    return false;
  }



}
