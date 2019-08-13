import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';


const routes: Routes = [
    {
        // Admin area
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
    },
    {
        // Website area
        path: '',
        loadChildren: () => import('./website/website.module').then(mod => mod.WebsiteModule)
    },
    {
        // Page not found
        path: '**',
        component: PageNotFoundComponent
    }
];


@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        RouterModule.forRoot(
            routes,
            { enableTracing: false } // <-- debugging purposes only
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}