import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

import { GlobalErrorComponent } from './components/global-error/global-error.component';
import { NavigationsComponent } from './components/navigations/navigations.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    GlobalErrorComponent,
    NavigationsComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  
}
