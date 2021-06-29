import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComoAyudarComponent } from './pages/como-ayudar/como-ayudar.component';
import { LandingComponent } from './pages/landing/landing.component';
import { PorqueAyudarComponent } from './pages/porque-ayudar/porque-ayudar.component';

const routes: Routes = [
  { path: 'como-donar', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  { path: '', component: LandingComponent },
  { path: 'porque-ayudar', component: PorqueAyudarComponent },
  { path: 'como-ayudar', component: ComoAyudarComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
