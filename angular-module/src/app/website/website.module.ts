import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';


@NgModule({
    imports: [
        CommonModule,
        WebsiteRoutingModule
    ],
    declarations: [
        WebsiteComponent,
        Page1Component,
        Page2Component
    ]
})
export class WebsiteModule { }
