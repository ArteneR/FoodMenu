import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Page3HomeComponent } from './page3-home.component';
import { Page3HomeRoutingModule } from './page3-home-routing.module';


@NgModule({
    imports: [
        CommonModule,
        Page3HomeRoutingModule
    ],
    declarations: [
        Page3HomeComponent
    ]
})
export class Page3HomeModule { }
