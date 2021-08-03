import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswersComponent } from './answers/answers.component';
import { GeoComponent } from './geo/geo.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:"", component: HomeComponent },
  {path:"playF1", component: AnswersComponent},
  {path:"playGeo", component: GeoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
