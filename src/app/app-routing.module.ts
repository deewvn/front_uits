import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { MainComponent } from './modules/main/main.component';
import { IusComponent } from './modules/ius/ius.component';
import { IbComponent } from './modules/ib/ib.component';
import { VmitComponent } from './modules/vmit/vmit.component';
import { KisComponent } from './modules/kis/kis.component';
import {UkmtComponent} from "./modules/ukmt/ukmt.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: MainComponent }
    ]
  },
  {
    path: 'departments',
    component: LayoutComponent,
    children: [
      { path: 'ius', component: IusComponent },
      { path: 'ib', component: IbComponent },
      { path: 'vmit', component: VmitComponent },
      { path: 'kis', component: KisComponent },
      { path: 'ukmt', component: UkmtComponent },
      { path: '', redirectTo: 'ius', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
