import { Global } from 'src/app/core/Models/global';
import { WpApiService } from './../../core/Service/wp-api/wp-api.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-arr',
  templateUrl: './arr.component.html',
  styleUrls: ['./arr.component.scss']
})
export class ArrComponent implements OnInit {
  videoUrl:any;
  dangerousVideoUrl:any = 'https://player.vimeo.com/video/';
  dangerousVideoUrl2:any= 'https://www.youtube.com/embed/'; //
  showVideobox:boolean = false;
  htmlPageData?:any=[];
  currpageSlug:any;

  // testurl:any = "https://www.youtube.com/embed/m4OsocmQ6JM";
  // testid:string = "25370939";
  // videoUrl2:any;

  constructor(private wpApi:WpApiService, private glb:Global, private _location:Location, private route:ActivatedRoute, private router:Router, private _sanitizer: DomSanitizer) {
    this.glb.VisaMainNav= false;

    // this.updateVimeoVideoUrl(this.testid) //initiera så att det inte blir crossscriptrequest error
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(prams =>{
      this.currpageSlug = prams.get('slug');

      this.wpApi.currentPageDataHandler.subscribe(()=>{
        this.getMaindata(this.currpageSlug);
      })
      this.getMaindata(this.currpageSlug);

    });
  }

  getMaindata(slug:string){
console.log("slugid " + slug);
    this.wpApi.getArrbyId(slug).subscribe(Response => {

      this.htmlPageData = Response

      if((Object.keys(Response).length === 0)){
        this.router.navigateByUrl("/404");
      };

      // console.log("detta visas: " + this.htmlPageData[0]?.acf.link_item1);
      if(this.htmlPageData?.acf.video!=""){
        // console.log("detta: " +this.htmlPageData[0]?.acf.link_item1)
        this.showVideobox= true;
        this.updateVimeoVideoUrl(this.htmlPageData?.acf.video);
      }else{
        this.showVideobox= false;
      }

      console.log(this.htmlPageData)
    });
  }

 public goBack(){

  this.glb.currentdetailArrid = this.currpageSlug;
// console.log("glb arrid " +this.glb.currentdetailArrid);
  this._location.back();
}

  ngOnDestroy(){
    this.glb.VisaMainNav= true;
  }

  updateVimeoVideoUrl(id: any) {
    // Appending an ID to a vimeo/YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data so
    // that it's easier to check if the value is safe.
    // this.dangerousVideoUrl = 'https://player.vimeo.com/video/' + id;
    let baseurl= ""
    console.log("film: " +id)
    if(isNaN(id)){
      baseurl= this.dangerousVideoUrl2 + id.trim()
    }else{
      baseurl= this.dangerousVideoUrl + id.trim()
    }

    if(id){
      this.videoUrl = this._sanitizer.bypassSecurityTrustResourceUrl(baseurl);
    }
  }
}
