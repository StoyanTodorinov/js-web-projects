import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';

import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  commentBtnText: string = 'Edit';
  addPostCommentText: string = 'New comment';
  product$: Observable<Object>;
  comments$: Observable<Object>;
  showInput: boolean = false;

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let productId = params['productId'];
      this.product$ = this.productsService.getProductDetailsById(productId);
      this.comments$ = this.productsService.getProductCommentsByProductId(productId);
    })
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  editComment() {
    // TODO UPDATE COMMENT IF COMMENT VALUE IS CHANGED
    this.commentBtnText === 'Edit' ? this.commentBtnText = 'Save' : this.commentBtnText = 'Edit';
  }

  removeComment(id) {
    // TODO DELETE COMMENT
    console.log(id);
  }

  addPostComment() {
    // TODO POST A NEW COMMENT
    this.addPostCommentText === 'Post comment' ? this.addPostCommentText = 'New comment' : this.addPostCommentText = 'Post comment';
    this.addPostCommentText === 'Post comment' ? this.showInput = true : this.showInput = false;
  }

  additionalInformation(data) {
    // TODO FIX FORMATTING THE DATA
    let result = ''
    for (const key in data) {
      result += key + ': ' + data[key] + '\n';
    }
    return result
  }
}
