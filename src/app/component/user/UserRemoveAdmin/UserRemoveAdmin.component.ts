import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/model/generic';
import { Location } from '@angular/common';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-UserRemoveAdmin',
  templateUrl: './UserRemoveAdmin.component.html',
  styleUrls: ['./UserRemoveAdmin.component.css']
})
export class UserRemoveAdminComponent implements OnInit {

  id: number = 0;
  oUser: IUser = null;
  msg: string = "";

  constructor(
    protected oLocation: Location,
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

  removeOne() {
    this.oUserService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "User " + this.id + " removed";        
        //open bootstrap modal here
        alert(this.msg);
        this.oLocation.back();
      }
    })
  }

}
