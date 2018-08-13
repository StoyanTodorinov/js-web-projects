import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CommentsService } from '../../services/comments.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment;
  @Input() removeComment: Function;
  commentBtnText: string = 'Edit';
  newComment: string;

  constructor(
    private commentsService: CommentsService,
    private toastr: ToastrService
  ) { }

  ngOnInit() { }

  formatTime(date) {
    let dateFormat = new Date(date);
    let monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    let day = dateFormat.getDate();
    let monthIndex = dateFormat.getMonth();
    let year = dateFormat.getFullYear();

    return day + ' ' + monthNames[monthIndex] + ' ' + year;
  }

  edit() {
    if (this.commentBtnText === 'Edit') {
      this.newComment = this.comment.text;
    } else {
      this.comment.text = this.newComment;
      this.commentsService.updateComment(this.comment).subscribe(data => {
        this.toastr.success('Comment updated');
      });
    }
    this.commentBtnText === 'Edit' ? this.commentBtnText = 'Save' : this.commentBtnText = 'Edit';
  }

  remove() {
    this.removeComment(this.comment._id);
  }
}
