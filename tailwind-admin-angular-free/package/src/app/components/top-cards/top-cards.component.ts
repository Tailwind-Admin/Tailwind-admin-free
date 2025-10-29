import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MaterialModule } from 'src/app/material.module';

interface topcards {
  id: number;
  img: string;
  color: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-top-cards',
  imports: [MaterialModule, CarouselModule, CommonModule],
  templateUrl: './top-cards.component.html',
})
export class AppTopCardsComponent {

  customOptions = {
    loop: true,
    margin: 24,
    autoplay: true,
    autoplayTimeout: 0,          // no delay
    autoplaySpeed: 8000,         // controls how slow/smooth it moves
    smartSpeed: 8000,            // sync with autoplaySpeed
    slideTransition: 'linear',   // important for smooth effect
    dots: false,
    nav: false,
    autoplayHoverPause: false,
    responsive: {
      0: { items: 2 },
      600: { items: 4 },
      1000: { items: 6 }
    }
  };


  topcards: topcards[] = [
    {
      id: 1,
      color: 'primary',
      img: '/assets/images/svgs/icon-user-male.svg',
      title: 'Employees',
      subtitle: '96',
    },
    {
      id: 2,
      color: 'warning',
      img: '/assets/images/svgs/icon-briefcase.svg',
      title: 'Clients',
      subtitle: '3,650',
    },
    {
      id: 3,
      color: 'secondary',
      img: '/assets/images/svgs/icon-mailbox.svg',
      title: 'Projects',
      subtitle: '356',
    },
    {
      id: 4,
      color: 'error',
      img: '/assets/images/svgs/icon-favorites.svg',
      title: 'Events',
      subtitle: '696',
    },
    {
      id: 5,
      color: 'success',
      img: '/assets/images/svgs/icon-speech-bubble.svg',
      title: 'Payroll',
      subtitle: '$96k',
    },
    {
      id: 6,
      color: 'secondary',
      img: '/assets/images/svgs/icon-connect.svg',
      title: 'Reports',
      subtitle: '59',
    },
    {
      id: 7,
      color: 'primary',
      img: '/assets/images/svgs/icon-user-male.svg',
      title: 'Employees',
      subtitle: '96',
    },
    {
      id: 8,
      color: 'warning',
      img: '/assets/images/svgs/icon-briefcase.svg',
      title: 'Clients',
      subtitle: '3,650',
    },
    {
      id: 9,
      color: 'secondary',
      img: '/assets/images/svgs/icon-mailbox.svg',
      title: 'Projects',
      subtitle: '356',
    },
    {
      id: 10,
      color: 'error',
      img: '/assets/images/svgs/icon-favorites.svg',
      title: 'Events',
      subtitle: '696',
    },
    {
      id: 11,
      color: 'success',
      img: '/assets/images/svgs/icon-speech-bubble.svg',
      title: 'Payroll',
      subtitle: '$96k',
    },
    {
      id: 12,
      color: 'secondary',
      img: '/assets/images/svgs/icon-connect.svg',
      title: 'Reports',
      subtitle: '59',
    },
  ];
}
