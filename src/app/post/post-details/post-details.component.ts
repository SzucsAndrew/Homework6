import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostData, PostServiceService } from '../post-service.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  id: any;
  postData?: PostData;
  errorMessage: string = '';
  constructor(private route: ActivatedRoute, private postServiceService: PostServiceService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.postServiceService.getPost(this.id).subscribe(
        (res) => {
          this.postData = res;
          this.errorMessage = '';
        },
        (err) => this.errorMessage = err
      );
    });
  }
}
