import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurdService } from './shared/services/auth-gaurd.service';

const routes: Routes =
 [
  { path: 'home',
  canActivate:[AuthGaurdService],
   loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
                       
  { path: 'search',
  canActivate:[AuthGaurdService],
   loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
                      
  { path: 'library',
  canActivate:[AuthGaurdService],
   loadChildren: () => import('./library/library.module').then(m => m.LibraryModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
