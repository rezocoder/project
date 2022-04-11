import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SettingsComponent } from './settings.component';
import { SettingsRoutes } from './settings.routes';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SettingsComponent],
  exports: [SettingsComponent],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild(SettingsRoutes), TranslateModule
  ]
})
export class SettingsModule { }
