import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routes } from './app.router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { RegistrationComponent } from './registration/registration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AllCourseComponent } from './all-course/all-course.component';
import { FormsModule } from '@angular/forms';
import { MernComponent } from './mern/mern.component';
import { MeanComponent } from './mean/mean.component';
import { GenAIComponent } from './gen-ai/gen-ai.component';
import { MongoDBComponent } from './mongo-db/mongo-db.component';
import { NodeComponent } from './node/node.component';
import { ExpressComponent } from './express/express.component';
import { ReactComponent } from './react/react.component';
import { AngularComponent } from './angular/angular.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { MapsComponent } from './maps/maps.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { AddressComponent } from './address/address.component';
import { VideoComponent } from './video/video.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ApiCallsComponent } from './api-calls/api-calls.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    RegistrationComponent,
    GalleryComponent,
    ContactComponent,
    HomeComponent,
    AllCourseComponent,
    MernComponent,
    MeanComponent,
    GenAIComponent,
    MongoDBComponent,
    NodeComponent,
    ExpressComponent,
    ReactComponent,
    AngularComponent,
    FooterComponent,
    CarouselComponent,
    MapsComponent,
    ContactDetailsComponent,
    AddressComponent,
    VideoComponent,
    NavbarComponent,
    ApiCallsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    routes,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
