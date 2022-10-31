import { Component, OnInit } from '@angular/core';
import { PostServiceService, PostViewData } from './post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  data : PostViewData[] = [];
  errorMessage: string = '';

  constructor(private postServiceService : PostServiceService) { }

  ngOnInit(): void {
    this.postServiceService.getPostsTitle().subscribe(
      (res) => {
        this.data = res;
        this.errorMessage = '';
      },
      (err) => this.errorMessage = err
    );
  }

  removePost(postViewData : PostViewData){
    const id = postViewData.id;
    this.postServiceService.removePost(id).subscribe(
      () => this.data = this.data.filter(x => x.id !== id),
      (err) => this.errorMessage = err
    );
  }
}
