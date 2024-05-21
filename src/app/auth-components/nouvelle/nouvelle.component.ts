import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nouvelle',
  templateUrl: './nouvelle.component.html',
  styleUrls: ['./nouvelle.component.css']
})
export class NouvelleComponent implements OnInit {
  
nouvelles: any;
  nouvelleId: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.nouvelleId = params['id'];
      // Chargez les détails de la nouvelle en fonction de this.nouvelleId
    });
  }
}
