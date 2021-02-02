import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'; 
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field'; 
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatIconModule } from "@angular/material/icon";

const MaterialComponents = [
  MatButtonModule,
  MatProgressSpinnerModule,
  MatInputModule, MatExpansionModule, MatIconModule
  ];

@NgModule({
  
  imports: [
    MaterialComponents,
  ],
  exports:[MaterialComponents]
})
export class MaterialModule { }
