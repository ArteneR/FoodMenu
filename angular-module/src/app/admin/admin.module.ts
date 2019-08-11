import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';


@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent,
        Page1Component,
        Page2Component
    ]
})
export class AdminModule { }