import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Welcome } from './welcome/welcome.component';
import { Chairman } from './chairman/chairman.component';
import { MusicLib } from './music-lib/music-lib.component';
import { Archive } from './archive/archive.component';
import { MembersComponent } from './members/members.component';
import { MusicDirComponent } from './music-dir/music-dir.component';
import { ConcertsComponent } from './concerts/concerts.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: Welcome },
  { path: 'chairman', component: Chairman },
  { path: 'musicLib', component: MusicLib },
  { path: 'archive', component: Archive },
  { path: 'members', component: MembersComponent },
  { path: 'musicdir', component: MusicDirComponent },
  { path: 'concerts', component: ConcertsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
  
}