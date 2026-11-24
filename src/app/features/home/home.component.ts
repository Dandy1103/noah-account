import { NoahPageHeadingComponent } from '@dandy1103/ui';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NoahPageHeadingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  get portalHome(): string {
    return '/portal';
  }
}
