import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { ConnectedGuard } from '../user/services/connected.guard';
import { ItemsComponent } from './rooms/items/items.component';


const routes: Routes = [
    {path: 'rooms', component: RoomsComponent},
    {path: 'rooms/:idRoom', component: ItemsComponent}
];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })

  export class DashboardRoutingModule {
  }