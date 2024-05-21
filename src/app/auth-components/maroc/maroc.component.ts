import { Component, OnInit } from '@angular/core';
import { LatestService, PostDTO } from '../latest/latest-services/latest.service';
import { Post } from '../../post.models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-maroc',
  templateUrl: './maroc.component.html',
  styleUrl: './maroc.component.css'
})
export class MarocComponent implements OnInit {
  categoryForm: FormGroup;
  posts: PostDTO[] = [];

  constructor(
    private fb: FormBuilder,
    private latestService: LatestService
  ) {
    this.categoryForm = this.fb.group({
      categoryId: [null]
    });
  }

  ngOnInit() {
    this.categoryForm.get('categoryId')!.valueChanges.subscribe(categoryId => {
      if (categoryId) {
        this.loadPostsByCategory(categoryId);
      }
    });
  }

  loadPostsByCategory(categoryId: number) {
    this.latestService.getPostsByCategory(categoryId).subscribe(posts => {
      this.posts = posts;
    });
  }
}
