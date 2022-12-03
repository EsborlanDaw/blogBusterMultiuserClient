import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/model/generic';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/service/Post.service';

@Component({
  selector: 'app-PostViewAdmin',
  templateUrl: './PostViewAdmin.component.html',
  styleUrls: ['./PostViewAdmin.component.css']
})
export class PostViewAdminComponent implements OnInit {

  id: number = 0;
  oPost: IPost = null;

  constructor(
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

}
