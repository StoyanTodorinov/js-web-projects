import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UiRoutingModule } from './ui-routing.module';

import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ButtonSliderComponent } from './shared/button-slider/button-slider.component';
import { HomeComponent } from './home/home.component';
import { ApiFormComponent } from './api-form/api-form.component';

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ButtonSliderComponent,
    HomeComponent,
    ApiFormComponent
  ],
  exports: [LayoutComponent]
})
export class UiModule { }
