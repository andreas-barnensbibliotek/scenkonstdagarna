import { Router } from '@angular/router';
import { Global } from 'src/app/core/Models/global';
import { WpApiService } from './../../core/Service/wp-api/wp-api.service';
import { Component, Input, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-arrlist',
  templateUrl: './arrlist.component.html',
  styleUrls: ['./arrlist.component.scss']
})
export class ArrlistComponent implements OnInit {
  @Input()
  valdcategory!: number;

  htmlPageData:any=[];
  categoryName:any="";
  arr={
        alderattr:"",
        addclass:"",
        removeclass:"categorystart",
        catname:""
      }

  constructor(private wpApi:WpApiService, private glb:Global, private router:Router, private _render:Renderer2) {
    this.categoryName="";
    this.htmlPageData=[];
  }

  ngOnInit(): void {
    console.log("kategorinr: " + this.valdcategory);
    // this.getMaindata(this.valdcategory);

    if (this.valdcategory==1){
      this.arr.alderattr="alder-0-6"
      this.arr.addclass ="sektion6";
      this.arr.catname = "Ålder 0-6 år"
      this.getMaindata(4);
    }

    if (this.valdcategory==2){
      this.arr.alderattr="alder-7-12"
      this.arr.addclass ="sektion7";
      this.arr.catname = "Ålder 7-12 år"
      this.getMaindata(3);
    }

    if (this.valdcategory==3){
      this.arr.alderattr="alder-13-19"
      this.arr.addclass ="sektion8";
      this.arr.catname = "Ålder 13-18 år"
      this.getMaindata(5);
    }

    this.updateDOM(this.arr);

    }


  getMaindata(catid:any){
    console.log("catid: "+catid)
    this.wpApi.getArrbyCategory(catid).subscribe(Response => {

      if((Object.keys(Response).length === 0)){
        this.router.navigateByUrl("/404");
      };

      this.htmlPageData = Response


      console.log(this.htmlPageData)
    });
  }

  updateDOM(setting:any){

    let e= this._render.selectRootElement('.categorystart',true);
    this._render.setAttribute(e,'id', setting.alderattr);
    this._render.addClass(e,setting.addclass);
    this._render.removeClass(e,setting.removeclass);
    this.categoryName= setting.catname;

  }

  gotodetail(arrid:any){

    // if(arrid=='testarr'){
    //   this.glb.currentdetailArrid= 1;
    // }
    // if(arrid=='testarr2'){
    //   this.glb.currentdetailArrid= 9;
    // }
    // if(arrid=='testarr3'){
    //   this.glb.currentdetailArrid= 4;
    // }
    // else{
    //   this.glb.currentdetailArrid= 0;
    // }

    this.router.navigate(['/arrangemang/'+arrid]);
  }

  // ngAfterViewChecked() {
  //   console.log("id= "+ this.glb.currentdetailArrid)
  //     if(this.glb.currentdetailArrid>0){
  //       this.scroll('#goto'+ this.glb.currentdetailArrid);
  //       this.glb.currentdetailArrid=0;
  //     }

  //   }
  //   scroll(skrivid:any) {
  //     // document.querySelector(skrivid).scrollIntoView({behavior: 'smooth'});
  //     document.querySelector(skrivid).scrollIntoView();

  //   }
  //   scrollsection(skrivid:any) {
  //     // document.querySelector(skrivid).scrollIntoView({behavior: 'smooth'});
  //     // this.vps.scrollToAnchor(skrivid)
  //   }

}
