import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoriesService } from '../../services/categories.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
        Validators.pattern('[A-Z][a-zA-Z]+')
      ]]
    });
  }

  submit() {
    let category = this.myForm.value;
    this.categoriesService.create(category).subscribe(data => {
      this.toastr.success('Category created');
      this.router.navigateByUrl('categories');
    });
  }

  get name() {
    return this.myForm.get('name');
  }
}
