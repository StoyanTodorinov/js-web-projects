import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories$: Observable<Object>

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.categories$ = this.categoriesService.getCategories()
  }
}
