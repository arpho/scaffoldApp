import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class KempelenService {

  constructor(private http: HttpClient) { }

   fetchAsset(ownerKey,assetId){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer myAuthToken',
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

    const url ="https://dev.thinkingadditive.com/v0/providers/export/requests"
return this.http.get(url,options)
  }
}
