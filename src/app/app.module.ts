import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './core/layout/layout.component';
import { MainComponent } from './modules/main/main.component';
import { TitleComponent } from './modules/main/components/title/title.component';
import { DepartmentsComponent } from './modules/main/components/departments/departments.component';
import { ForApplicantsComponent } from './modules/main/components/for-applicants/for-applicants.component';
import { FeedbackComponent } from './modules/main/components/feedback/feedback.component';
import { StudentLifeComponent } from './modules/main/components/student-life/student-life.component';
import { PartnersComponent } from './modules/main/components/partners/partners.component';
import { NavigationComponent } from './core/ui/navigation/navigation.component';
import { FooterComponent } from './core/ui/footer/footer.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    MainComponent,
    TitleComponent,
    DepartmentsComponent,
    ForApplicantsComponent,
    FeedbackComponent,
    StudentLifeComponent,
    PartnersComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
