import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GditemsComponent } from './gditems/gditems.component';
import { GdrulesComponent } from './gdrules/gdrules.component';
import { HomeComponent } from './home/home.component';
import { GdtoolsComponent } from './gdtools/gdtools.component';
import { SandboxComponent } from './sandbox/sandbox.component';

@NgModule({
  declarations: [
    AppComponent,
    GditemsComponent,
    GdrulesComponent,
    HomeComponent,
    GdtoolsComponent,
    SandboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'gd-items', component: GditemsComponent },
      { path: 'gd-rules', component: GdrulesComponent },
      { path: 'gd-tools', component: GdtoolsComponent },
      { path: 'sandbox', component: SandboxComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home' },
    ],
      {
        anchorScrolling: 'enabled',
        scrollOffset: [0, 50]
      }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
