import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarocComponent } from './auth-components/maroc/maroc.component';
import { NouvelleComponent } from './auth-components/nouvelle/nouvelle.component';
import { AfriqueComponent } from './auth-components/afrique/afrique.component';
import { EuropeComponent } from './auth-components/europe/europe.component';
import { AsieComponent } from './auth-components/asie/asie.component';
import { AmeriqueComponent } from './auth-components/amerique/amerique.component';
import { LatestComponent } from './auth-components/latest/latest.component';

const routes: Routes = [
  {path:'',component:MarocComponent},

  {path:'maroc',component:MarocComponent},
  {path:'afrique',component:AfriqueComponent},
  {path:'europe',component:EuropeComponent},
  {path:'asie',component:AsieComponent},
  {path:'amerique',component:AmeriqueComponent},
  {path:'latest',component:LatestComponent},

  { path: 'nouvelle/:id', component: NouvelleComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
