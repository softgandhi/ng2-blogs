import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { HttpService } from './services/http.service';
import { BlogService } from './services/blog.service';
import { BlogResolver } from './models/blog.resolver';

import { AppComponent } from './app.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    BlogsComponent,
    BlogDetailComponent,
    CapitalizePipe,
    CreateBlogComponent,
    EditBlogComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [HttpService, BlogService, BlogResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
