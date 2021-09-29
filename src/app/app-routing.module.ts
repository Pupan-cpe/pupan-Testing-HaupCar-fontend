import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from '../app/pages/main/main.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginModule)
  },

  {
    path: 'Managecar',
    component: MainComponent,
    loadChildren: () =>
      import('./pages/car/car.module').then((m) => m.CarModule)
  },


  {
    path: 'error',
    component: ErrorComponent,
    loadChildren: () =>
      import('./pages/error/error.module').then((m) => m.ErrorModule)
  },



  // {
  //   path: 'user_management',
  //   canActivate: [AuthGuard],
  //   data: { roles: ['admin', 'superadmin'] },
  //   component: MainComponent,
  //   loadChildren: () =>
  //     import('./features/users/users.module').then((m) => m.UsersModule)
  // },

  {
    path: '**',
    redirectTo: '/error'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
