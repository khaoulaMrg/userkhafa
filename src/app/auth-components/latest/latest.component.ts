import { Component, OnInit } from '@angular/core';
import { LatestService, PostDTO } from './latest-services/latest.service';
import { Post } from '../../post.models';

@Component({
  selector: 'app-latest',
  templateUrl: './latest.component.html',
  styleUrl: './latest.component.css'
})
export class LatestComponent implements OnInit {


  postedPosts: Post[] = [];
  categories: any = [];
posts: any;

  constructor(private latestService: LatestService) { }

  ngOnInit(): void {
    this.loadApprovedAndPostedPosts();
  }
  loadApprovedAndPostedPosts() {
    this.latestService.getApprovedAndPostedPosts().subscribe({
      next: (posts: Post[]) => {
        this.posts = posts;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des catégories :', error);
      }
    });
  }
}
