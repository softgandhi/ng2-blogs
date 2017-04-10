import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable()
export class BlogService {
  url = 'http://localhost:1337/api/blogs/';
  usage = 0;

  constructor(private http: HttpService) {

  }

  get(id) {
    this.usage += 1;
    return this.http.get(this.url + id);
  }

  getAll() {
    return this.http.get(this.url);
  }

  post(model: any) {
    return this.http.post(this.url, model);
  }

  put(model: any) {
    return this.http.put(this.url + model.id, model);
  }

  delete(id: number) {
    return this.http.delete(this.url + id);
  }
}
