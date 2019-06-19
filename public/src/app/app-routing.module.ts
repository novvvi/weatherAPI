import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { WashingtonComponent } from './washington/washington.component';
import { DallasComponent } from './dallas/dallas.component';
import { BurbankComponent } from './burbank/burbank.component';
import { SanjoseComponent } from './sanjose/sanjose.component';


const routes: Routes = [
  { path: 'seattle' ,component: SeattleComponent },
  { path: 'chicago' ,component: ChicagoComponent },
  { path: 'sanjose' ,component: SanjoseComponent },
  { path: 'burbank' ,component: BurbankComponent },
  { path: 'dallas' ,component: DallasComponent },
  { path: 'washington' ,component: WashingtonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

