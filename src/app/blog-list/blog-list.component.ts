import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})

export class BlogListComponent implements OnInit{
  posts: any[] | undefined


  constructor(private blogService: BlogService){ }
  ngOnInit(): void {
    this.blogService.getPosts().subscribe(data => {
      this.posts = data;
    })
  }

}
