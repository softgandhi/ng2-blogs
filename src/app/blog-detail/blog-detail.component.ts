import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {
  blog: any = {};
  nextBlogId = 1;
  fallbackImage = 'images/user.png';

  constructor(private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer,
    private blogService: BlogService) {

  }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = +param['id'];
      this.nextBlogId = id >= 2 ? 1 : id + 1;
      this.blogService.get(id).subscribe(res => this.blog = res);
    });

    // const id = +this.route.snapshot.params['id'];
    // this.nextBlogId = id + 1;
    // this.blogService.get(id).subscribe(res => this.blog = res);
  }

  getTrustedHtml(content: string) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

}
