import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Ass_starComponent } from './ass_star.component';
import { ImageComponent} from './ass_bgimage.component';
import { ParentComponent } from './io_deco_heart.component';
import { ChildComponent } from './io_child.component';
import { StructuralComponent } from './structural.component';
import { DropdownComponent } from './ass_drpdwn.component';
import { testDirective } from './test.directive';
import { imagePipe } from './image.pipes';
import { TemplateFormComponent } from './template-form/template-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { RouterModule } from '@angular/router';
import { routes } from './apps.routes';

@NgModule({
  declarations: [
    AppComponent,
    Ass_starComponent,
    ImageComponent,
    ParentComponent,
    ChildComponent,
    StructuralComponent,
    DropdownComponent,
    testDirective,
    imagePipe,
    TemplateFormComponent,
    ReactiveFormComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
