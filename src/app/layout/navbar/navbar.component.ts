import { Component } from '@angular/core';
import { NoahNavbarComponent } from '@dandy1103/navbar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NoahNavbarComponent],
  template: `<noah-navbar repo="noah-account" fallbackLabel="帳號管理" />`,
})
export class NavbarComponent {}
