import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OverwatchstatsService {

  public API = 'http://local:8080/';

  constructor(private http: HttpClient) { }

  getOverwatchStats(id: number): Observable<any> {
    return this.http.get(this.API + "battlenetId/" + id)
  }
}
