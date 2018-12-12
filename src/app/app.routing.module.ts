import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ConnectedGuard } from './user/services/connected.guard';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';

const routes: Routes = [
    { path: 'dashboard', loadChildren: "./dashboard/dashboard.module#DashboardModule", canActivate: [ConnectedGuard] }, //Permet le lazy routing
    { path: 'public', loadChildren: "./public/public.module#PublicModule" },
    { path: 'user', loadChildren: "./user/user.module#UserModule" },
    {path: 'progressBar', component: ProgressBarComponent}
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {
  }