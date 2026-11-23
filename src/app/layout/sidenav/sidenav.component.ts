import { Component, DestroyRef, inject } from '@angular/core';
import { NoahSidebarComponent, NoahSidebarSection } from '@dandy1103/ui';
import { fallbackSide, loadCatalog, sideSections } from '../navbar/nav-catalog';

const SELF_REPO = 'noah-account';

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [NoahSidebarComponent],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss',
})
export class SidenavComponent {
  sections: NoahSidebarSection[] = [];

  constructor() {
    const controller = new AbortController();
    inject(DestroyRef).onDestroy(() => controller.abort());
    void loadCatalog(controller.signal).then((catalog) => {
      const next = catalog ? sideSections(catalog, SELF_REPO) : [];
      this.sections = (next.length ? next : fallbackSide(SELF_REPO)).map(section => ({
        ...section,
        links: section.links.map(link => ({ ...link, exact: true })),
      }));
    });
  }
}
