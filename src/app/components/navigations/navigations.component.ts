import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-navigations',
  standalone: true,
  imports: [RouterModule, MatToolbarModule],
  templateUrl: './navigations.component.html',
})
export class NavigationsComponent {

}
