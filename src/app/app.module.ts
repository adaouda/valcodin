import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HomeComponent } from './home/home.component';
import { JobAddFormComponent } from './job-add-form/job-add-form.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobListComponent } from './job-list/job-list.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { DaysAgoPipe } from './pipes/days-ago.pipe';
import { ToMoneySymbolPipe } from './pipes/to-money-symbol.pipe';
import { ToShortDatePipe } from './pipes/to-short-date.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { AuthService } from './services/auth.service';
import { JobService} from './services/job.service';

const routes = [
  { path: '', component: HomeComponent},
  { path: 'jobs/add', component: JobAddFormComponent},
  { path: 'jobs/:id', component: JobDetailsComponent},
  { path: 'jobs', component: JobListComponent},
  { path: 'about', component: AboutComponent},
  { path: 'login', component: AuthenticationComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'profile', component: UserProfileComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AuthenticationComponent,
    HomeComponent,
    JobAddFormComponent,
    JobDetailsComponent,
    JobListComponent,
    RegisterComponent,
    SearchComponent,
    SearchResultComponent,
    UserProfileComponent,
    DaysAgoPipe,
    ToMoneySymbolPipe,
    ToShortDatePipe,
    TruncatePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [JobService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
