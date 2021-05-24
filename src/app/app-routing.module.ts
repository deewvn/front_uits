import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';
import { MainComponent } from './modules/main/main.component';
import {IusComponent} from './modules/ius/ius.component';
import {IbComponent} from './modules/ib/ib.component';
import {VmitComponent} from './modules/vmit/vmit.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MainComponent
      },
      {
        path: 'ius',
        component: IusComponent
      },
      {
        path: 'ib',
        component: IbComponent
      },
      {
        path: 'vmit',
        component: VmitComponent
      },
      {
        path: 'kis',
        component: MainComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
