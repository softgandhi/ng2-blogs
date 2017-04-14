import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { BlogService } from '../services/blog.service';

@Injectable()
export class BlogResolver implements Resolve<any> {
    constructor(private blogService: BlogService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> {
        return this.blogService.get(route.params.id);
    }
}
