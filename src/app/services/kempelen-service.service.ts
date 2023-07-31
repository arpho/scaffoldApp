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
    
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      "x-jwt":`Bearer ${token}`,
      
      'Content-Type': 'application/json'
    });
    const params = new HttpParams()
    params.set("owner",ownerKey).set('id',assetId)
     const options = {
      headers: headers,
      params: params,
      observe: 'body' as const,
      responseType: 'json' as const,
      withCredentials: true
    };
    console.log("headers.get('x-jwt')=",headers.get("x-jwt"))
    console.log("headers",headers)
    console.log("options",options)
    console.log("params",params)

    const url ="https://dev.thinkingadditive.com/v0/providers/export/requests"
return this.http.post(url,options)
  }
}
