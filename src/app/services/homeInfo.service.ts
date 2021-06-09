import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { element } from 'protractor';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { HomeInfo } from '../models/homeInfo';

@Injectable({
  providedIn: 'root'
})
export class HomeInfoService {

  private _homeinfo: BehaviorSubject<HomeInfo[]> = new BehaviorSubject([]);

  constructor(private http: HttpClient) { }

  get homeinfo(): Observable<HomeInfo[]> {
    return this._homeinfo.asObservable();
  }

  retrieveHomeinfoFromHttp() {
    let size = 0;
    this.homeinfo.pipe(take(1)).subscribe(
      (ohomeinfo: HomeInfo[]) => {
        size = ohomeinfo.length;
      }
    );


    this.http.get("http://localhost/BitBit/public/homeinfo").subscribe(
      (response: any[]) => {
        if (response.length == size) return;
        else this._homeinfo.next([]);
        response.forEach((element) => {
          let homeinfo: HomeInfo = new HomeInfo();
          homeinfo.id = element.id;
          homeinfo.title = element.title;
          homeinfo.image = element.image;
          homeinfo.content = element.content;

          this.homeinfo.pipe(take(1)).subscribe(
            (ohomeinfo: HomeInfo[]) => {
              this._homeinfo.next(ohomeinfo.concat(homeinfo));
            }
          )
        });
      }
    );



  }
}


