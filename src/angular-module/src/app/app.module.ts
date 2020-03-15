import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/* App Root */
import { AppComponent } from './app.component';

/* Routing Modules */
import { AppRoutingModule } from './app-routing.module';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
