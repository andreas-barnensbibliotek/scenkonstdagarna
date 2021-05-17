import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BaseApiService {
  private _httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }

  constructor(@Inject(String) private url:string, private http:HttpClient) {
  }

  getPosts(url:any){
    // console.log("kommer hit " + url);

    if(url) this.url =url;
      return this.http.get(this.url,this._httpOptions)
    .pipe(
      retry(1),// använd retry för att göra om reqesten x gånger
      catchError(this.HandleThisClassErrors),
    );
  }

  doPost(url:string, postobj:any){
    return this.http.post(url,JSON.stringify(postobj),this._httpOptions)
    .pipe(
      catchError(this.HandleThisClassErrors)
    );
  }

  deletePost(id:any){
    return this.http.delete(this.url +'/'+ id)
    .pipe(
      catchError(this.handleError)
    );
  }


private handleError( errorResponse:HttpErrorResponse){
  if(errorResponse.error instanceof ErrorEvent){

    console.error("Clientside error: ", errorResponse.error.message);
  }else{
    console.error("Serverside error: ", errorResponse);
  }

  return throwError("Något blev fel vid hämtning av data. Vi har fått en notering och jobbar med felet. vänligen försök senare");



}

  //TODO Skapa ERROR handler http
  private HandleThisClassErrors(error: Response){

    // if(error.status === 400){
    //   console.log("detta är 400");
    //   return Observable.throw(new AllreadyExistError(error.json()));
    // }

    // if(error.status === 404){
    //   console.log("detta är 404");
    //   return Observable.throw(new NotFoundError());
    // }

    // return Observable.throw(new AppError(error));
    return ""
  }
}
