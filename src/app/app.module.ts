import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { ListComponent } from './component/list/list.component';
import { TreeComponent } from './component/tree/tree.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    TreeComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'nav', component: NavComponent},
      { path: 'list', component: ListComponent},
      { path: 'tree', component: TreeComponent },
      // { redirectTo: 'nav', pathMatch: 'full' }// 重定向到
    ]),
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
