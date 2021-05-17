import { Router } from '@angular/router';
import { WpApiService } from './../../core/Service/wp-api/wp-api.service';
import { Global } from 'src/app/core/Models/global';
import { Component, OnInit } from '@angular/core';
import { LocationStrategy, ViewportScroller } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  htmlPageData:any=[];
  videoUrl:any;
  dangerousVideoUrl:any = 'https://player.vimeo.com/video/';
  showVideobox:boolean = true;
  //  testurl:any = "https://www.youtube.com/embed/m4OsocmQ6JM";
  // testid:string = "25370939";
  // videoUrl2:any;

  constructor(private glb:Global, private wpApi:WpApiService, private location:LocationStrategy, private _router:Router, private vps: ViewportScroller, private _sanitizer: DomSanitizer) {

    history.pushState(null, "", window.location.href);
    // check if back or forward button is pressed.
    this.location.onPopState(() => {
        history.pushState(null, "", window.location.href);

    });

  }

  ngOnInit(): void {
    this.updateVimeoVideoUrl('547499957');
    this.loadPageData();
  }



  ngAfterViewInit(){
  // console.log("id= "+ this.glb.currentdetailArrid)
  // let test= '#goto21'
  // this.vps.scrollToAnchor(test)

  // // this.scroll('goto21');

  //   if(this.glb.currentdetailArrid){
  //     // this.scroll('#goto'+ this.glb.currentdetailArrid);
  //     this.vps.scrollToAnchor('#goto'+ this.glb.currentdetailArrid);
  //     this.glb.currentdetailArrid="";
  //   }

  }

  loadPageData(){
    this.wpApi.getMainSlug("scenkonstdagarna").subscribe(Response => {
      this.glb.mainJsonArrList = Response
      this.htmlPageData= this.glb.mainJsonArrList;

    });
  }

  getpagedata(){
    if(this.glb.isEmptyObj(this.glb.mainJsonArrList)){
      this.loadPageData();

    }else{
      this.htmlPageData= this.glb.mainJsonArrList;

    }
  }

  gotoSection(section:any){
    // this.scrollsection('#section_'+ section);
  }

  // gotodetail(id:any){

  //   if(id=='testarr'){
  //     this.glb.currentdetailArrid= 1;
  //   }
  //   if(id=='testarr2'){
  //     this.glb.currentdetailArrid= 9;
  //   }
  //   if(id=='testarr3'){
  //     this.glb.currentdetailArrid= 4;
  //   }
  //   else{
  //     this.glb.currentdetailArrid= 0;
  //   }

  //   this._router.navigate(['/arrangemang/'+id]);

  // }

  // scroll(skrivid:any) {
  //   // document.querySelector(skrivid).scrollIntoView({behavior: 'smooth'});
  //   document.querySelector(skrivid).scrollIntoView();

  // }
  // scrollsection(skrivid:any) {
  //   // document.querySelector(skrivid).scrollIntoView({behavior: 'smooth'});
  //   this.vps.scrollToAnchor(skrivid)
  // }

  updateVimeoVideoUrl(id: string) {
    // Appending an ID to a vimeo/YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    // this.dangerousVideoUrl = 'https://player.vimeo.com/video/' + id;
    if(id){
      this.videoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.dangerousVideoUrl + id.trim());
    }
  }
}
