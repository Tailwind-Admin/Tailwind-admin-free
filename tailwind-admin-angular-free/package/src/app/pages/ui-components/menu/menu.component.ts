import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  selector: 'app-menu',
  imports: [MatCardModule, MatMenuModule, MatIconModule, TablerIconsModule, MatButtonModule],
  templateUrl: './menu.component.html',
})
export class AppMenuComponent {
  constructor() {}
}
