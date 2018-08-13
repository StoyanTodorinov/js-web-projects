import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { ProductsService } from '../../services/products.service';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private ADD_TEXT = 'Add to favorites';
  private REMOVE_TEXT = 'Remove from favorites';
  private POST_COMMENT_TEXT = 'Post comment';
  private NEW_COMMENT_TEXT = 'New comment';

  addPostCommentText: string = this.NEW_COMMENT_TEXT;
  product: any;
  comments: any;
  showInput: boolean = false;
  comment: string = '';
  newComment: string;
  productId: string;
  removeComment: Function;
  addToFavoritesBtnText: string;
  price: string;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private commentsService: CommentsService,
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params['productId'];
      this.addToFavoritesBtnText = this.checkAddButtonText();
      this.ajax();
    })
    this.removeComment = this.remove.bind(this);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  checkAddButtonText() {
    if (this.authService.getFavorites().includes(this.productId)) {
      return 'Remove from favorites';
    }
    return 'Add to favorites';
  }

  addPostComment() {
    if (this.addPostCommentText === this.POST_COMMENT_TEXT) {
      if (this.comment === '') {
        this.toastr.error('You cannot submit an empty comment');
        this.changeaddPostCommentText();
        return;
      }
      let comment = {
        text: this.comment,
        productId: this.productId,
        author: localStorage.getItem('username')
      }
      this.commentsService.createComment(comment).subscribe(comment => {
        this.comments.push(comment);
        this.toastr.success('Comment added');
      });
    }
    this.changeaddPostCommentText();
    this.comment = '';
  }

  remove(id) {
    this.comments = this.comments.filter(x => x._id !== id);
    this.commentsService.deleteComment(id).subscribe(data => {
      this.toastr.warning('Comment removed');
    });
  }

  addProductToFavorites() {
    let favorites = this.authService.getFavorites();
    let message = `Added ${this.product.name} to favorites`;
    if (this.addToFavoritesBtnText == this.ADD_TEXT) {
      favorites.push(this.productId);
      this.addToFavoritesBtnText = this.REMOVE_TEXT;
    } else {
      favorites = favorites.filter(x => x !== this.productId);
      this.addToFavoritesBtnText = this.ADD_TEXT
      message = `Removed ${this.product.name} from favorites`;
    }
    this.authService.setFavorites(favorites).subscribe(data => {
      this.toastr.info(message);
    });
  }

  additionalInformation(data) {
    if (data.length) {
      let result = '';
      for (const key in data) {
        if (+key % 2 === 1) {
          result += data[key] + '<br />';
        } else {
          result += '&#160;&#160;&#160;\u2022 ' + data[key] + ': ';
        }
      }
      return 'Additional information:<br />' + result.slice(0, -2).toLowerCase();
    }
    return '';
  }

  formatPrice() {
    this.price = this.product.promo > 0 ?
      (+this.product.price - +this.product.price * (this.product.promo / 100)).toFixed(2)
      + '$ (' + this.product.price + '$)'
      : this.product.price + '$';
  }

  ajax() {
    this.productsService.getProductDetailsById(this.productId).subscribe(data => {
      this.product = data;
      this.formatPrice();
    });
    this.productsService.getProductCommentsByProductId(this.productId).subscribe(data => {
      this.comments = data;
    });
  }

  changeaddPostCommentText() {
    this.addPostCommentText === this.POST_COMMENT_TEXT ? this.addPostCommentText = this.NEW_COMMENT_TEXT : this.addPostCommentText = this.POST_COMMENT_TEXT;
    this.addPostCommentText === this.POST_COMMENT_TEXT ? this.showInput = true : this.showInput = false;
  }
}
