import { Http, Headers, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HttpService {

  constructor(public http: Http) {
  }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  get(url: string) {
    const headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    }).map(res => res.text().length > 0 ? res.json() : null);
  }

  post(url: string, model: any) {
    let headers = new Headers();
    headers = this.createAuthorizationHeader(headers);

    return this.http.post(url, JSON.stringify(model), {
      headers: headers
    }).map(res => res.text().length > 0 ? res.json() : null).catch((err: any) => {
      console.log(err.message || `Something went wrong while calling api.`);
      return Observable.throw(err);
    });
  }

  put(url: string, model: any) {
    let headers = new Headers();
    headers = this.createAuthorizationHeader(headers);

    return this.http.put(url, JSON.stringify(model), {
      headers: headers
    }).map(res => res.text().length > 0 ? res.json() : null).catch((err: any) => {
      console.log(err.message || `Something went wrong while calling api.`);
      return Observable.throw(err);
    });
  }

  delete(url: string) {
    let headers = new Headers();
    headers = this.createAuthorizationHeader(headers);

    return this.http.delete(url, {
      headers: headers
    });
  }
}
