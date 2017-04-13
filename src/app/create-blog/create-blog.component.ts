import { Component, OnInit } from '@angular/core';

import { NgForm, FormGroup, FormControl } from '@angular/forms';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {
  model: any = {
    image: 'images/user.png'
  };

  constructor(private blogService: BlogService) { }

  ngOnInit() {
  }

  loadImage(event: any) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.model.image = reader.result;
    }, false);
    // fileReader.onload = (e) => this.model.image = fileReader.result;
    reader.readAsDataURL(event.target.files[0]);
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      alert('form is valid');
      this.blogService.post(this.model).subscribe(res => {
        console.log(res);
      },
        err => { alert('Cant create a blog. some error occurred.'); });
    } else {
      alert('Invalid form');
    }
    // console.log(form.value);
    console.log(this.model);
  }

}
