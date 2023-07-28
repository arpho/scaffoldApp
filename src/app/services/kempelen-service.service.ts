import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class KempelenService {

  constructor(private http: HttpClient) { }

   fetchAsset(ownerKey,assetId){
    const options = {
      responseType:'json'
    }

    const url ="https://dev.thinkingadditive.com/v0/providers/export/requests"
return this.http.get
  }
}
