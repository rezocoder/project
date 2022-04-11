import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routes';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(HomeRoutes), TranslateModule
  ]
})
export class HomeModule { }


