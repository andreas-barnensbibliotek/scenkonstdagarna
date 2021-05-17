import { Global } from 'src/app/core/Models/global';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.scss']
})
export class MainFooterComponent implements OnInit {

  devversion:string="";

  constructor( public glb:Global) { }

  ngOnInit(): void {
    this.devversion= this.glb.currentversion
  }

}
