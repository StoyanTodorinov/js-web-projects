import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  CREATE_COMMENT_URL,
  UPDATE_COMMENT_URL,
  DELETE_COMMENT_BY_ID_URL,
} from '../api.constants/api.urls';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http: HttpClient,
  ) { }

  createComment(comment) {
    return this.http.post(CREATE_COMMENT_URL, comment);
  }

  updateComment(comment) {
    return this.http.put(UPDATE_COMMENT_URL, comment);
  }

  deleteComment(id) {
    return this.http.delete(DELETE_COMMENT_BY_ID_URL + id);
  }
}