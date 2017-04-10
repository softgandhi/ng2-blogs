import { Component, OnInit } from '@angular/core';

import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {
  blogs: any; // [] = [];
  fallbackImage = 'images/user.png';
  a = 1.456;
  b = 100;
  constructor(private blogService: BlogService) {

  }

  ngOnInit() {
    this.loadBlogs();
  }

  loadBlogs() {
    this.blogService.getAll().subscribe(res => this.blogs = res,
      err => {
        alert('Some error occurred at the server.');
      }
    );
  }

  onDelete(id: number) {
    if (confirm('Are you sure?')) {
      this.blogService.delete(id).subscribe(res => {
        alert('deleted successfully');
        this.loadBlogs();
      },
        err => alert('could not delete')
      );
    }
  }

}
