import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';


const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: '',
                children: [
                    { 
                        // Admin - Page1
                        path: 'page1',
                        loadChildren: () => import('./page1/page1.module').then(mod => mod.Page1Module)
                    },
                    { 
                        // Admin - Page2
                        path: 'page2',
                        loadChildren: () => import('./page2/page2.module').then(mod => mod.Page2Module)
                    },
                    {
                        // Admin - Home page (Dashboard)
                        path: '',
                        loadChildren: () => import('./page3-dashboard/page3-dashboard.module').then(mod => mod.Page3DashboardModule)
                    }
                ]
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
export class AdminRoutingModule { }