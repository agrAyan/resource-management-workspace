import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resource } from 'projects/resource-manager/src/lib/models/resources/resource';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourcesService {

  baseUrl= "/api"

  constructor(private _http:HttpClient) { }

  getAllResource= ():Observable<Resource[]> =>{
    const url = this.baseUrl+"/resourceVO"
    return this._http.get<Resource[]>(url);
  }

}
