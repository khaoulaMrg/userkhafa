import { Component, OnInit } from '@angular/core';
import { LatestService, PostDTO } from '../latest/latest-services/latest.service';

@Component({
  selector: 'app-asie',
  templateUrl: './asie.component.html',
  styleUrl: './asie.component.css'
})
export class AsieComponent  {
  asiePosts: PostDTO[] = [];

  constructor(private latestService: LatestService) { }

 
  
  getFirstThreePosts(): PostDTO[] {
    return this.asiePosts.slice(0, 3);
  }
}

