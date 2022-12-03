import { IUser } from 'src/app/model/generic';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-UserViewAdmin',
  templateUrl: './UserViewAdmin.component.html',
  styleUrls: ['./UserViewAdmin.component.css']
})
export class UserViewAdminComponent implements OnInit {

  id: number = 0;
  oUser: IUser = null;

  constructor(
    private oActivatedRoute: ActivatedRoute,
    private oUserService: UserService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oUserService.getOne(this.id).subscribe({
      next: (data: IUser) => {
        this.oUser = data;
        console.log(data);
      }
    })
  }

}
