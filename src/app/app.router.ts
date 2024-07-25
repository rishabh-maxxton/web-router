//import { ModuleWithProviders } from '@angular/core';
//import {RouterModule} from ‘@angular/core’;
import { Routes, RouterModule } from '@angular/router'; 
//module for implementing routing

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MongoDBComponent } from './mongo-db/mongo-db.component';
import { ExpressComponent } from './express/express.component';
import { ReactComponent } from './react/react.component';
import { AngularComponent } from './angular/angular.component';
import { NodeComponent } from './node/node.component';
import { GenAIComponent } from './gen-ai/gen-ai.component';
import { FooterComponent } from './footer/footer.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }, //default page
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'gallery', component:GalleryComponent},
    { path: 'registration', component:RegistrationComponent},
    { path: 'home', component:HomeComponent},
    { path: 'contact', component:ContactComponent},
    { path: 'mongodb', component:MongoDBComponent},
    { path: 'express', component:ExpressComponent},
    { path: 'react', component:ReactComponent},
    { path: 'node', component:NodeComponent},
    { path: 'angular', component:AngularComponent},
    { path: 'genAI', component:GenAIComponent},
    { path: 'footer', component:FooterComponent},
];

//RouterModule.forRoot is for creating routes for the entire application
//  pass the routes array in the RouterModule using RouterModule.forRoot(router)

export const routes = RouterModule.forRoot(router);
//CREATE THE app.router.ts inside the App folder

//export const routes: ModuleWithProviders = RouterModule.forRoot(router);
