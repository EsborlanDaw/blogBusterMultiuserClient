import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPage, IUser, IUser2Form, IUser2Send } from '../model/generic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private oHttp: HttpClient
  ) { }

  getUserPlist(page: number, size: number, termino: string,
    strSortField: string, strOrderDirection: string): Observable<IPage<IUser>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IUser>>("http://localhost:8082/user", { params: params });
  }

  getOne(id: number): Observable<IUser> {
    return this.oHttp.get<IUser>("http://localhost:8082/user" + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>("http://localhost:8082/user" + '/' + id);
  }

  updateOne(oUser2Form: IUser2Form): Observable<number> {
    let oUser2Send: IUser2Send = {
      id: oUser2Form.id.value,
      name: oUser2Form.name.value,
      surname: oUser2Form.surname.value,
      lastname: oUser2Form.lastname.value,
      username: oUser2Form.username.value,
      email: oUser2Form.email.value,
      post: oUser2Form.post.value,
    }
    return this.oHttp.put<number>("http://localhost:8082/user", oUser2Send);
  }

  newOne(oUser2Form: IUser2Form): Observable<number> {    
    let oUser2Send: IUser2Send = {
      id: 0,
      name: oUser2Form.name.value,
      surname: oUser2Form.surname.value,
      lastname: oUser2Form.lastname.value,
      username: oUser2Form.username.value,
      email: oUser2Form.email.value,
      post: oUser2Form.post.value,
      
    }
    return this.oHttp.post<number>("http://localhost:8082/user", oUser2Send);
  }


}
