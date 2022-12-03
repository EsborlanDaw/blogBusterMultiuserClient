import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/model/generic';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PostService } from 'src/app/service/Post.service';

@Component({
  selector: 'app-PostRemoveAdmin',
  templateUrl: './PostRemoveAdmin.component.html',
  styleUrls: ['./PostRemoveAdmin.component.css']
})
export class PostRemoveAdminComponent implements OnInit {

  id: number = 0;
  oPost: IPost = null;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oPostService: PostService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oPostService.getOne(this.id).subscribe({
      next: (data: IPost) => {
        this.oPost = data;
        console.log(data);
      }
    })
  }

  removeOne() {
    this.oPostService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Post " + this.id + " removed";        
        //open bootstrap modal here
        alert(this.msg);
        this.oLocation.back();
      }
    })
  }

}
