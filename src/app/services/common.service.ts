import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  private _currentPage: string;
  public currentPageEvent: Subject<any> = new Subject<any>();
  public set currentPage(title : string) {
    this._currentPage = title;
  }
  public get currentPage() : string {
    return this._currentPage;
  }
}
