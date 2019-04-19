import { NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ServerResolver} from './servers/server/server-resolver.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [ // localhost:4200/users
      { path: ':id/:name', component: UserComponent} // the ":" allows you to interpret with a parameter
    ]},
  {
    path: 'servers',
    // canActivate: [AuthGuard], // being able to protect the route and its children
    canActivateChild: [AuthGuard], // being to protect just the child routers
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: {server: ServerResolver} },
      { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ]},
  // { path: 'not-found', component: PageNotFoundComponent},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found'} // ** is for wildcard route to catch all routes you dont know. THIS MUST BE PLACED LAST!
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes) // registering routers in angular app
  ],
  exports: [RouterModule]
})
export  class AppRoutingModule {

}
