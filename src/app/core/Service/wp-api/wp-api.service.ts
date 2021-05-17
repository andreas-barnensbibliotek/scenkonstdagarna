import { Subject } from 'rxjs';
import { Global } from './../../Models/global';
import { BaseApiService } from './../base-api.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WpApiService extends BaseApiService{

  constructor(Http:HttpClient, private _global:Global) {
    super("",Http);
  }

  private _currentPageDataHandler: Subject<void> = new Subject<void>();

  get currentPageDataHandler(){
    return this._currentPageDataHandler
  }

  getMeny(meny:any){
    let url:string = this._global.server + meny +"?filter[orderby]=date&order=asc";
    return this.getPosts(url);
  }

  getMainSlug(slug:any){
    let url:string = this._global.server +"mainsidor?slug="+slug;
    // console.log("getPageSlug URL: " + url);
    return this.getPosts(url);
  }

  getArrSlug(slug:any){
    let url:string = this._global.server +"arrangemang?slug="+slug+"&per_page=100&orderby=title&order=asc";
    // console.log("getPageSlug URL: " + url);
    return this.getPosts(url);
  }

  getArrbyId(arrid:any){
    let url:string = this._global.server +"arrangemang/"+arrid;
    // console.log("getPageSlug URL: " + url);
    return this.getPosts(url);
  }

  getArrbyCategory(catid:any){
    let url:string = this._global.server +"arrangemang?categories="+catid+"&per_page=100&orderby=title&order=asc";
    // console.log("getPageSlug URL: " + url);
    return this.getPosts(url);
  }


  postRegisterUser(formdata:any){
    let url:string = this._global.postserver +"?post_type=RegisterUser";
     console.log("getPageSlug URL: " + url);
     console.log(formdata);
    return this.doPost(url,formdata);
  }


}
