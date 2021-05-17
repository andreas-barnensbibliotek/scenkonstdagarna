
import { Router } from '@angular/router';
import {Injectable } from "@angular/core";

@Injectable() // Decorator that marks a class as available to be provided and injected as a dependency.
export class Global {
  private _liveserver:string = "https://scenkonstdagarna.se";
  private _devserver:string = "http://scenkonstdagarna.se";
  private _localdevserver:string = "http://localhost:81/scenkonstdagarna.se";
  private _wpApi:string = "/wpAdmin/wp-json/wp/v2/";
  private _wpApiPost:string = "/wpAdmin/wp-json/addreg/v2/";

  mainJsonArrList:any =[];
  currentdetailArrid:any=0;

  userregistered:string = ""
  VisaMainNav:boolean=true;
  VisaGuideNav:boolean=false;
  currentversion:string="Version: 1.0.1 2021-05-17"

  server:string = this._liveserver + this._wpApi;
  postserver:string = this._liveserver + this._wpApiPost;
  devkey:string = "/devkey/alf/?type=json";

  constructor(private router: Router) {
  }

  public isEmptyObj = (obj:any) => {
    return obj === null || undefined
        ? true
        : (() => {
            for (const prop in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                return false;
              }
            }
            return true;
          })();
  };

  public deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
  };

}
