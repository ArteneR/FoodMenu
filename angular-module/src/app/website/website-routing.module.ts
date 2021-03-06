import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebsiteComponent } from './website.component';


const routes: Routes = [
    {
        path: '',
        component: WebsiteComponent,
        children: [
            { 
                // Page1 ( /page1 )
                path: 'page1',
                loadChildren: () => import('./page1/page1.module').then(mod => mod.Page1Module)
            },
            {
                // Page2 ( /page2 )
                path: 'page2',
                loadChildren: () => import('./page2/page2.module').then(mod => mod.Page2Module)
            },
            {
                // Home Page3 ( / )
                path: '',
                loadChildren: () => import('./page3-home/page3-home.module').then(mod => mod.Page3HomeModule)
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
