import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  fallbackImage = 'images/blog.jpg';
  model: any = {};

  constructor(private route: ActivatedRoute, private router: Router,
    private blogService: BlogService) { }

  ngOnInit() {
    this.route.params.subscribe(param => {
      const id = +param['id'];
      this.blogService.get(id).subscribe(res => {
        this.model = res;
        if (!this.model.image) {
          this.model.image = this.fallbackImage;
        }
        console.log(this.model);
      });
    });
  }

  onUpload(image: string) {
    console.log('image uploaded');
    console.log(image);
    this.model.image = image;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.blogService.put(this.model).subscribe(res => {
        console.log(res);
        this.router.navigateByUrl('/blogs');
      });
    } else {
      alert('Invalid form');
    }
    // console.log(form.value);
    console.log(this.model);
  }
}
