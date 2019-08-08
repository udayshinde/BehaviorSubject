import { Injectable } from '@angular/core';
import { BehaviorSubject,Subject } from 'rxjs';

@Injectable()
export class RoutingDataService {

    
  private routingUrl : Subject<string> =  new BehaviorSubject<string>(null);

  constructor() { }

  getRoutingUrl() {
    return this.routingUrl.asObservable();
  }

  sendRoutingUrl(url : string) {
    this.routingUrl.next(url);
  }
}
