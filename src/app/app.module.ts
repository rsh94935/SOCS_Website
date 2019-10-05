import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import {DataTableModule} from 'primeng/datatable';
import {GalleriaModule} from 'primeng/galleria';
import {CarouselModule} from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GalleryModule } from 'ng-gallery';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy} from '@angular/common';
import {ScheduleModule} from 'primeng/schedule';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Welcome } from './welcome/welcome.component';
import { Chairman } from './chairman/chairman.component';
import { MusicLib } from './music-lib/music-lib.component';
import { Archive } from './archive/archive.component';
import { MembersComponent } from './members/members.component';
import { MusicDirComponent } from './music-dir/music-dir.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { EmailService } from './email.service';

import * as jQuery from 'jquery';


@NgModule({
  declarations: [
    AppComponent,
    Welcome,
    Chairman,
    MusicLib,
    Archive,
    MembersComponent,
    MusicDirComponent,
    ConcertsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    DataTableModule,
    GalleriaModule,
    ButtonModule,
    GalleryModule.forRoot(),
    TableModule,
    ScheduleModule,
    HttpModule,
    CarouselModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
