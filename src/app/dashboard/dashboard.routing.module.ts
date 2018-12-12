import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { ConnectedGuard } from '../user/services/connected.guard';


const routes: Routes = [
    { path: 'rooms', component: RoomsComponent}
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class DashboardRoutingModule {
  }