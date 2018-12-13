import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { DashboardRoutingModule } from './dashboard.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemsComponent } from './rooms/items/items.component';

@NgModule({
  declarations: [RoomsComponent, ItemsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
