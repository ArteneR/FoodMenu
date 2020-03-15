import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page3DashboardComponent } from './page3-dashboard.component';
import { Page3DashboardRoutingModule } from './page3-dashboard-routing.module';


@NgModule({
    imports: [
        CommonModule,
        Page3DashboardRoutingModule
    ],
    declarations: [
        Page3DashboardComponent
    ]
})
export class Page3DashboardModule { }
