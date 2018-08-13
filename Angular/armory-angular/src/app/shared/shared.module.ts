import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductComponent } from './product/product.component';
import { CommentComponent } from './comment/comment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [HeaderComponent, FooterComponent, NavigationComponent, ProductComponent, CommentComponent],
  exports: [HeaderComponent, FooterComponent, NavigationComponent, ProductComponent, CommentComponent]
})
export class SharedModule { }
