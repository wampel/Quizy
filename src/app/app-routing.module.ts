import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnswersComponent } from './answers/answers.component';
import { F1Component } from './f1/f1.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:"", component: HomeComponent },
  {path:"playGeo", component: AnswersComponent},
  {path:"playF1", component: F1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
