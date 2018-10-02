import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(
    private http: HttpClient
  ) { }

  makeRequest(method, url, data) {
    switch (method) {
      case "GET":
        return this.http.get(url);
      case "PATCH":
        return this.http.patch(url, data);
      case "PUT":
        return this.http.put(url, data);
      case "DELETE":
        return this.http.delete(url);
      case "POST":
        return this.http.post(url, data);
    }
  }
}
