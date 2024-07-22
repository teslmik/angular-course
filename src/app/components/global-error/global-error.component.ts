import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ErrorService } from '../../services/error.service';

@Component({
  selector: 'app-global-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './global-error.component.html',
})
export class GlobalErrorComponent {
  constructor(public errorService: ErrorService) { }
}
