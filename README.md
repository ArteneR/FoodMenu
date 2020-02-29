# FoodMenu ReadMe
This repo contains the code for the FoodMenu platform (code migrated from Bitbucket.org).

This acts also as a template bolierplate code for Angular + Laravel projects.



--------------------------------------------------------------------------------

Angular version: 7.2.15
Laravel version: 5.8.31
PHP version: 7.2.12

--------------------------------------------------------------------------------

### HOW TO RUN & BUILD THE PROJECT - QUICK SHORTCUTS ###

sh start-angular.sh             Start Angular project server
sh start-laravel.sh             Start Laravel project server
sh build-angular-project.sh     Build Angular project inside the Laravel project

NEW:

Run the docker-compose up command (detached) to start all containers: 
    docker-compose up -d

Open Browser on:
    http://localhost:8080

Stop all containers:
    docker-compose down

Build all the images:
    docker-compose build

See all running docker containers:
    docker ps -a

Connect to a running container:
    docker exec -it <container_name_or_id> bash
    docker exec -it <container_name_or_id> ls       (to see the list of files, eg. if 'bash' command is not found)


--------------------------------------------------------------------------------

### HOW TO RUN THE PROJECT ###

Start Angular server:
cd angular-module
ng serve
Go to http://localhost:4200


(In a separate terminal)
Start Laravel server:
cd laravel-module
php artisan serve
Go to http://localhost:8000



### Build the project (Angular) into Laravel project ###

cd agular-module
ng build --base-href http://localhost:8000/app/

Access the app (the Laravel+Angular app):
http://localhost:8000/app



--------------------------------------------------------------------------------

###  STEPS FOR CREATING THE PROJECT  ###


1. Create Angular module

ng new angular-module



2. Create Laravel module

laravel new laravel-module



3. Start PHP Laravel server

cd laravel-module
php artisan serve

Now Laravel project works on port 8000 on localhost
http://localhost:8000



4. Start Angular server

cd angular-module
ng serve

Now Angular project works on port 4200 on localhost
http://localhost:4200



5. Add Authentication

php artisan make:auth
Login and Register buttons will appear in Laravel project



6. Setup the database

cd laravel-module
Open .env file
Edit the database connection (DB_DATABASE, DB_USERNAME, DB_PASSWORD, etc.) (after creating the Database)
Restart the Laravel server (cd laravel-module && php artisan serve)



7. Migrate data (for authentication)

First, need to config the following:
Go to: laravel-module/app/Providers/AppServiceProvider.php
Add the following:

use Illuminate\Support\Facades\Schema;

public function boot()
{
    Schema::defaultStringLength(191);
}

Now:
cd laravel-module
php artisan migrate
This will create the migration table + authentication related tables

(You can now Register a new user from Laravel app in the browser)



8. Make the GET auth route

Go in file: laravel-module/routes/web.php
Add the following:

Auth::routes();

Route::get('/auth', function() {
    //Perform a check whether the user is authenticated or not
    //Remove the if block during production
    if (!Auth::check()) {
        //If they are not, we forcefully login the user with id=1
        $user = App\User::find(1);
        Auth::login($user);
    }
    return Auth::user();
});

Route::get('/home', 'HomeController@index')->name('home');

Now we can go to http://localhost:8000/auth and we will get the info about user with id 1 (in JSON)




9. Make auth route on Angular

cd angular-module
Open file: src/app/app.component.ts

Add the following:
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'angular-module';
  
    constructor(private http: HttpClient) {}
    
    ngOnInit() {
        // Make the HTTP request:
        this.http.get('http://localhost:8000/auth').subscribe(data => {
            console.log(data);
        });
    }
}

-------------------------

Now, open file: src/app/app.module.ts

Add the following:
import { HttpClientModule } from '@angular/common/http';

and add HttpClientModule to the imports array

-------------------------

Now, we need to fix the CORS problem
For this, we will create a middleware on Laravel

cd laravel-module
php artisan make:middleware Cors

Go to file app/Http/Middleware/Cors.php (just created)
Paste the following:

<?php

namespace App\Http\Middleware;

use Closure;

class Cors
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        return $next($request)
                ->header('Access-Control-Allow-Origin', '*')
                ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
                ->header('Access-Control-Allow-Headers', 'Content-Type, X-Auth-Token, Origin, Authorization, X-Requested-With');
    }
}

-------------------------

Open file: app/Http/Kernel.php
Add the following to the $middleware array:
\App\Http\Middleware\Cors::class



10. Make User model

Create file angular-module/src/app/User.ts with the following contents:

export class User {
    id: number;
    name: string;
    email: string;
}


In app.component.ts:

Add
import { User } from './User';


export class AppComponent implements OnInit {
    title = 'angular-module';
    user: User;
  
    constructor(private http: HttpClient) {}
    
    ngOnInit() {
        // Make the HTTP request:
        this.http.get<User>('http://localhost:8000/auth').subscribe(data => {
            console.log(data);
            this.user = data;
        });
    }
}



In app.component.html change the welcome message to:

Hello {{ user?.name }}!



11. Linking the two separate apps

Open angular-module/angular.json
Change   projects -> angular-module -> architect -> build -> options -> outputPath to: "../laravel-module/public/app"

Build the project:

ng build --base-href http://localhost:8000/app/

Access the app (the Laravel+Angular app):
http://localhost:8000/app



12. Change the redirect path

In laravel-module/app/Controllers/Auth/LoginController.php
AND
In laravel-module/app/Controllers/Auth/RegisterController.php
Change:
protected $redirectTo = '/app';