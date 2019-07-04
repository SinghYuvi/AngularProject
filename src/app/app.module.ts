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
    imagePipe
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
