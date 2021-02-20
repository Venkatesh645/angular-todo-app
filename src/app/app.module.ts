import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/common/main/main.component';
import { ErrorFeedbackComponent } from './components/common/error-feedback/error-feedback.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ErrorFeedbackComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes), FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
