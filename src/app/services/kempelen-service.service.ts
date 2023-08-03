import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KempelenService {

  constructor(private http: HttpClient
    ) { }


   fetchAsset(ownerKey,assetId,token){
    
    const headers = new HttpHeaders()
    .set("x-jwt",`Bearer ${token}`)
    .set('Content-Type', 'application/json')
    .set("Access-Control-Allow-Origin","localhost:8100/home")
    //.set("Access-Control-Allow-Origin","localhost:8100")
    
  /*   const params = new HttpParams()
    params.set("owner",ownerKey).set('id',assetId) */
     const options = {
      headers: headers,
      observe: 'body' as const,
      responseType: 'json' as const,
      withCredentials: true
    };
    console.log("headers.get('x-jwt')=",headers.get("x-jwt"))
    console.log("headers",headers)
    console.log("options",options)
    const urlFactory= (url:string,owner:string,assetId:string)=>{
     return  `${url}?owner=${owner}&id=${assetId}`
    }

    const url ="https://dev.thinkingadditive.com/v0/providers/export/requests"
return this.http.get(urlFactory(url,ownerKey,assetId),options)
  }
}
