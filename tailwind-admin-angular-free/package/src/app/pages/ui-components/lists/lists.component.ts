import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {DatePipe} from '@angular/common';
import { MaterialModule } from 'src/app/material.module';


export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-lists',
  imports: [MatListModule, MatCardModule, DatePipe,MatIconModule, MaterialModule ],
  templateUrl: './lists.component.html',
})
export class AppListsComponent {
  constructor() {}

  typesOfShoes: string[] = ['Loafers', 'Sneakers'];

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/25'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/25'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/25'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/25'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/25'),
    },
  ];
}
