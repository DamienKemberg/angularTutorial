import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { ConnectedGuard } from './user/services/connected.guard';

const routes: Routes = [
    { path: 'dashboard', loadChildren: "./dashboard/dashboard.module#DashboardModule", canActivate: [ConnectedGuard] }, //Permet le lazy routing
    { path: 'public', loadChildren: "./public/public.module#PublicModule" },
    { path: 'user', loadChildren: "./user/user.module#UserModule" }
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

  export class AppRoutingModule {
  }