import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HokeyComponent} from './hokey.component';
import {BaseballComponent} from './baseball.component';


const routes: Routes = [
  {path: 'hokey', component: HokeyComponent},
  {path: 'baseball', component: BaseballComponent},
  {path: '', redirectTo: '/hokey', pathMatch: 'full'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
