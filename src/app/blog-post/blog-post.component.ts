import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { BlogService } from '../blog.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

  post: any;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.blogService.getPost(id).subscribe({
        next: (data) => {
          this.post = data;
        },
        error: (error) => {
          console.error('Error fetching post:', error);
        },
        complete: () => {
          console.log('Post fetch completed');
        }
      });
    } else {
      console.error('Invalid ID: ID parameter is missing');
    }
  }
}
