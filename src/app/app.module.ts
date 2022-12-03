
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';

import { PostPlistAdminComponent } from './component/post/PostPlistAdmin/PostPlistAdmin.component';
import { SearchUnroutedComponent } from './component/shared/search-unrouted/search-unrouted.component';
import { DropdownRegisterPageComponent } from './component/shared/dropdown-register-page/dropdown-register-page.component';
import { PaginationUnroutedComponent } from './component/shared/pagination-unrouted/pagination-unrouted.component';
import { PaginationService } from './service/pagination.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostService } from './service/Post.service';
import { UserPlistAdminComponent } from './component/user/UserPlistAdmin/UserPlistAdmin.component';
import { UserViewAdminComponent } from './component/user/UserViewAdmin/UserViewAdmin.component';
import { UserRemoveAdminComponent } from './component/user/UserRemoveAdmin/UserRemoveAdmin.component';
import { UserEditAdminComponent } from './component/user/UserEditAdmin/UserEditAdmin.component';
import { UserNewAdminComponent } from './component/user/UserNewAdmin/UserNewAdmin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    PostPlistAdminComponent,
    SearchUnroutedComponent,
    DropdownRegisterPageComponent,
    PaginationUnroutedComponent,
    UserPlistAdminComponent,
    UserViewAdminComponent,
    UserRemoveAdminComponent,
    UserEditAdminComponent,
    UserNewAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [   
    PaginationService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
