import { Component, OnInit } from '@angular/core';
import { LatestService, PostDTO } from '../latest/latest-services/latest.service';

@Component({
  selector: 'app-maroc',
  templateUrl: './maroc.component.html',
  styleUrls: ['./maroc.component.css']
})
export class MarocComponent implements OnInit {
  marocPosts: PostDTO[] = [];
  listOfTypes = []; // Remplir avec les types disponibles
  listOfCategories = []; // Remplir avec les catégories disponibles

  constructor(private latestService: LatestService) { }

  ngOnInit(): void {
    this.getMarocPosts();
  }

  getMarocPosts(): void {
    this.latestService.getApprovedPostsByCategory('maroc')
      .subscribe(posts => {
        this.marocPosts = posts.map(post => ({
          ...post,
          processedImg: 'data:image/jpeg;base64,' + post.byteImg
        }));
      });
  }

  getFirstThreePostsByType(typeName: string): PostDTO[] {
    return this.marocPosts.filter(post => post.typeName === typeName).slice(0, 3);
  }
}
