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
                        path: 'page1',
                        loadChildren: () => import('./page1/page1.module').then(mod => mod.Page1Module)
                    },
                    { 
                        path: 'page2',
                        loadChildren: () => import('./page2/page2.module').then(mod => mod.Page2Module)
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