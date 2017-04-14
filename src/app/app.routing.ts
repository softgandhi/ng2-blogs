import { ModuleWithProviders } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BlogsComponent } from './blogs/blogs.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { BlogResolver } from './models/blog.resolver';

export const routing: ModuleWithProviders = RouterModule.forRoot([
    {
        path: 'blogs',
        component: BlogsComponent
    },
    {
        path: 'create-blog',
        component: CreateBlogComponent
    },
    {
        path: 'edit-blog/:id',
        component: EditBlogComponent,
        resolve: {
            blog: BlogResolver
        }
    },
    {
        path: 'blog-detail/:id',
        component: BlogDetailComponent
    },
    {
        path: '',
        redirectTo: '/blogs', pathMatch: 'full'
    }
]);
