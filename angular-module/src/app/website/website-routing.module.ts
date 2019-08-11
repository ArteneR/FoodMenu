import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';


const routes: Routes = [
    {
        path: '',
        component: WebsiteComponent,
        children: [
            { 
                path: 'page1',
                component: Page1Component,
                pathMatch: 'full'
            },
            { 
                path: 'page2',
                component: Page2Component,
                pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class WebsiteRoutingModule { }
