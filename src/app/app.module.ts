import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import{HttpClientModule} from '@angular/common/http';
import{ProfileService} from './profile.service';
import { RadiusDirective } from './radius.directive';
import { DateCountPipe } from './date-count.pipe'


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RadiusDirective,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
