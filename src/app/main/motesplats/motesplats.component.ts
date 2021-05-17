import { Global } from './../../core/Models/global';
import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-motesplats',
  templateUrl: './motesplats.component.html',
  styleUrls: ['./motesplats.component.scss']
})
export class MotesplatsComponent implements OnInit {

  htmlPageData:any=[];
  videoUrl:any;
  dangerousVideoUrl:any = 'https://player.vimeo.com/video/';
  showVideobox:boolean = true;

  constructor(private glb:Global, private location:LocationStrategy, private _sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.updateVimeoVideoUrl('548431937');
  }

  public goBack(){

    this.glb.currentdetailArrid = 9999;
    this.location.back();
  }
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
