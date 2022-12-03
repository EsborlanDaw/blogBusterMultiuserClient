import { PostPlistAdminComponent } from './component/post/PostPlistAdmin/PostPlistAdmin.component';
import { HomeComponent } from './component/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserPlistAdminComponent } from './component/user/UserPlistAdmin/UserPlistAdmin.component';
import { UserViewAdminComponent } from './component/user/UserViewAdmin/UserViewAdmin.component';
import { UserRemoveAdminComponent } from './component/user/UserRemoveAdmin/UserRemoveAdmin.component';
import { UserNewAdminComponent } from './component/user/UserNewAdmin/UserNewAdmin.component';
import { UserEditAdminComponent } from './component/user/UserEditAdmin/UserEditAdmin.component';
import { PostViewAdminComponent } from './component/post/PostViewAdmin/PostViewAdmin.component';
import { PostRemoveAdminComponent } from './component/post/PostRemoveAdmin/PostRemoveAdmin.component';
import { PostNewAdminComponent } from './component/post/PostNewAdmin/PostNewAdmin.component';
import { PostEditAdminComponent } from './component/post/PostEditAdmin/PostEditAdmin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'post', component: PostPlistAdminComponent },
  { path: 'user', component: UserPlistAdminComponent },
  { path: 'user/view/:id', component: UserViewAdminComponent },
  { path: 'user/remove/:id', component: UserRemoveAdminComponent },
  { path: 'user/new', component: UserNewAdminComponent},
  { path: 'user/edit/:id', component:  UserEditAdminComponent},
  { path: 'post/view/:id', component: PostViewAdminComponent },
  { path: 'post/remove/:id', component: PostRemoveAdminComponent },
  { path: 'post/new', component: PostNewAdminComponent},
  { path: 'post/edit/:id', component:  PostEditAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
