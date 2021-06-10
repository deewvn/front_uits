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
import { PartnersComponent } from './shared/components/partners/partners.component';
import { NavigationComponent } from './core/ui/navigation/navigation.component';
import { FooterComponent } from './core/ui/footer/footer.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { IusComponent } from './modules/ius/ius.component';
import { IbComponent } from './modules/ib/ib.component';
import { VmitComponent } from './modules/vmit/vmit.component';
import { KisComponent } from './modules/kis/kis.component';
import { DepartmentTitleComponent } from './shared/components/department-title/department-title.component';
import { MiniGalleryComponent } from './shared/components/mini-gallery/mini-gallery.component';
import { DepartmentAboutComponent } from './shared/components/department-about/department-about.component';
import { DepartmentAreasComponent } from './shared/components/department-areas/department-areas.component';
import { UkmtComponent } from './modules/ukmt/ukmt.component';
import { HttpClientModule } from '@angular/common/http';

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
    FooterComponent,
    IusComponent,
    IbComponent,
    VmitComponent,
    KisComponent,
    DepartmentTitleComponent,
    MiniGalleryComponent,
    DepartmentAboutComponent,
    DepartmentAreasComponent,
    UkmtComponent
  ],
  imports: [
    BrowserModule,
    IvyCarouselModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
