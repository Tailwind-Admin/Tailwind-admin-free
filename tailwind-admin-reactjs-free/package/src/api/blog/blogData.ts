import { Chance } from 'chance';
import { random } from 'lodash';
import { sub } from 'date-fns';
import s1 from 'src/assets/images/blog/blog-img1.jpg';
import s2 from 'src/assets/images/blog/blog-img2.jpg';
import s3 from 'src/assets/images/blog/blog-img3.jpg';
import s4 from 'src/assets/images/blog/blog-img4.jpg';
import s5 from 'src/assets/images/blog/blog-img5.jpg';
import s6 from 'src/assets/images/blog/blog-img6.jpg';
import s7 from 'src/assets/images/blog/blog-img11.jpg';
import s8 from 'src/assets/images/blog/blog-img8.jpg';
import s9 from 'src/assets/images/blog/blog-img9.jpg';
import s10 from 'src/assets/images/blog/blog-img10.jpg';

import user1 from 'src/assets/images/profile/user-1.jpg';
import user2 from 'src/assets/images/profile/user-2.jpg';
import user3 from 'src/assets/images/profile/user-3.jpg';
import user4 from 'src/assets/images/profile/user-4.jpg';
import user5 from 'src/assets/images/profile/user-5.jpg';
import user6 from 'src/assets/images/profile/user-1.jpg';
import { uniqueId } from 'lodash';
import { BlogType, BlogPostType } from 'src/types/apps/blog';

const chance = new Chance();

export const BlogComment: BlogType[] = [
  {
    id: uniqueId('#comm_'),
    profile: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user2,
      name: chance.name(),
    },
    time: chance.date(),
    comment: chance.paragraph({ sentences: 2 }),
    replies: [],
  },
  {
    id: uniqueId('#comm_'),
    profile: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user3,
      name: chance.name(),
    },
    time: chance.date(),
    comment: chance.paragraph({ sentences: 2 }),
    replies: [
      {
        id: uniqueId('#comm_'),
        profile: {
          id: chance.integer({ min: 1, max: 2000 }),
          avatar: user3,
          name: chance.name(),
        },
        time: chance.date(),
        comment: chance.paragraph({ sentences: 2 }),
      },
    ],
  },
  {
    id: uniqueId('#comm_'),
    profile: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user4,
      name: chance.name(),
    },
    time: chance.date(),
    comment: chance.paragraph({ sentences: 2 }),
    replies: [],
  },
];

export const BlogPost: BlogPostType[] = [
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'Garmins Instinct Crossover is a rugged hybrid smartwatch',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s1,
    createdAt: sub(new Date(), { days: 8, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Gadget',
    featured: false,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user1,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'After Twitter Staff Cuts, Survivors Face ‘Radio Silence',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s2,
    createdAt: sub(new Date(), { days: 7, hours: 3, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Lifestyle',
    featured: false,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user2,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'Apple is apparently working on a new ‘streamlined’ accessibility for iOS',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s3,
    createdAt: sub(new Date(), { days: 5, hours: 2, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Design',
    featured: false,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user3,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'Why Figma is selling to Adobe for $20 billion streamlined',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s4,
    createdAt: sub(new Date(), { days: 7, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Design',
    featured: false,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user4,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'Streaming video way before it was cool, go dark tomorrow',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s5,
    createdAt: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Lifestyle',
    featured: false,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user5,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'As yen tumbles, gadget-loving Japan goes for secondhand iPhones ',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s6,
    createdAt: sub(new Date(), { days: 2, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Gadget',
    featured: false,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user6,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'Intel loses bid to revive antitrust case against patent foe Fortress',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s7,
    createdAt: sub(new Date(), { days: 3, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Social',
    featured: false,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user2,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'COVID outbreak deepens as more lockdowns loom in China',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s8,
    createdAt: sub(new Date(), { days: 4, hours: 6, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Health',
    featured: false,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user3,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'Early Black Friday Amazon deals: cheap TVs, headphones, laptops',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s9,
    createdAt: sub(new Date(), { days: 5, hours: 3, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Gadget',
    featured: true,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user4,
      name: chance.name(),
    },
    comments: BlogComment,
  },
  {
    id: chance.integer({ min: 1, max: 2000 }),
    title: 'Presented by Max Rushden with Barry Glendenning, Philippe Auclair',
    content: chance.paragraph({ sentences: 2 }),
    coverImg: s10,
    createdAt: sub(new Date(), { days: 0, hours: 1, minutes: 20 }),
    view: random(9999),
    share: random(9999),
    category: 'Health',
    featured: true,
    author: {
      id: chance.integer({ min: 1, max: 2000 }),
      avatar: user5,
      name: chance.name(),
    },
    comments: BlogComment,
  },
];
