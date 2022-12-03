import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPage, IPost, IPost2Form, IPost2Send } from '../model/generic';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private oHttp: HttpClient
  ) { }

  getPostPlist(page: number, size: number, termino: string, id_Post: number,
    strSortField: string, strOrderDirection: string): Observable<IPage<IPost>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_Post != 0) {
      params = params.set("Post", id_Post);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    return this.oHttp.get<IPage<IPost>>("http://localhost:8082/post", { params: params });
  }

  getOne(id: number): Observable<IPost> {
    return this.oHttp.get<IPost>("http://localhost:8082/post" + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>("http://localhost:8082/post" + '/' + id);
  }

  updateOne(oPost2Form: IPost2Form): Observable<number> {
    let oPost2Send: IPost2Send = {
      id: oPost2Form.id.value,
      title: oPost2Form.title.value,
      body: oPost2Form.body.value,
      labels: oPost2Form.labels.value,
      visible: oPost2Form.visible.value,
      datetime: oPost2Form.datetime.value,
      user: oPost2Form.user.value,
    }
    return this.oHttp.put<number>("http://localhost:8082/post", oPost2Send);
  }

  newOne(oPost2Form: IPost2Form): Observable<number> {    
    let oPost2Send: IPost2Send = {
      id: 0,
      title: oPost2Form.title.value,
      body: oPost2Form.body.value,
      labels: oPost2Form.labels.value,
      visible: oPost2Form.visible.value,
      datetime: oPost2Form.datetime.value,
      user: oPost2Form.user.value,
      
    }
    return this.oHttp.post<number>("http://localhost:8082/post", oPost2Send);
  }


}
