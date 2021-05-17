import { Router } from '@angular/router';
import { WpApiService } from './../../core/Service/wp-api/wp-api.service';
import { Global } from './../../core/Models/global';
import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { LocationStrategy, ViewportScroller } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  ArrListPageData:any =[];
  videoUrl:any;
  dangerousVideoUrl:any = 'https://player.vimeo.com/video/';
  showVideobox:boolean = true;
  //  testurl:any = "https://www.youtube.com/embed/m4OsocmQ6JM";
  // testid:string = "25370939";
  // videoUrl2:any;

  constructor(private glb:Global, private wpApi:WpApiService, private location:LocationStrategy,private cd:ChangeDetectorRef, private _router:Router, private vps: ViewportScroller, private _sanitizer: DomSanitizer) {

    history.pushState(null, "", window.location.href);
    // check if back or forward button is pressed.
    this.location.onPopState(() => {
        history.pushState(null, "", window.location.href);

    });

  }

  ngOnInit(): void {
  }


 ngAfterViewChecked() {
    // console.log("id= "+ this.glb.currentdetailArrid)
      if(this.glb.currentdetailArrid>0){
        this.scroll('#goto'+ this.glb.currentdetailArrid);
        this.glb.currentdetailArrid=0;
      }

    }
    scroll(skrivid:any) {
      // document.querySelector(skrivid).scrollIntoView({behavior: 'smooth'});
      document.querySelector(skrivid).scrollIntoView();

    }
    scrollsection(skrivid:any) {
      // document.querySelector(skrivid).scrollIntoView({behavior: 'smooth'});
      // this.vps.scrollToAnchor(skrivid)
    }


}
