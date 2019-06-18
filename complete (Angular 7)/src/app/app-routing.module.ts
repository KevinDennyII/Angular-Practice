import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {NgModule} from '@angular/core';
import {HomeComponent} from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  // Protecting Lazy Loaded Routes with canLoad
  // What if you want to use route protection (canActivate  to be precise) on lazily loaded routes?
  // You can add canActivate to the lazy loaded routes but that of course means, that you might load code which in
  // the end can't get accessed anyways. It would be better to check that BEFORE loading the code.
  // You can enforce this behavior by adding the canLoad  guard to the route which points to the lazily loaded module:
  // { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule', canLoad: [AuthGuard] }
  // In this example, the AuthGuard  should implement the CanLoad interface.
  { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}, // lazy loading the Recipes Module..
  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})], // Preloading all lazy load after the project is built
  exports: [RouterModule]
})
export class AppRoutingModule {

}
