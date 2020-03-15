import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page3DashboardComponent } from './page3-dashboard.component';


const routes: Routes = [
    {
        path: '',
        component: Page3DashboardComponent
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
export class Page3DashboardRoutingModule { }
