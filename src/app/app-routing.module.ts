import { MotesplatsComponent } from './main/motesplats/motesplats.component';
import { Err404pageComponent } from './shared/err404page/err404page.component';
import { ArrComponent } from './arrangemang/arr/arr.component';
import { StartComponent } from './main/start/start.component';
import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routerOptions: ExtraOptions = {
  enableTracing: false,
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  { path: '',  redirectTo: 'hem', pathMatch: 'full' },
  { path: 'hem', component: StartComponent },
  { path: 'motesplats', component: MotesplatsComponent },
  { path: 'arrangemang/:slug',component: ArrComponent},
  { path: '**',  component: Err404pageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
