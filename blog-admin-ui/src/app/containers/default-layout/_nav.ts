import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    name: 'Content',
    url: '/content',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Categories',
        url: '/content/post-categories',
      },
      {
        name: 'Posts',
        url: '/content/posts',
      },
      {
        name: 'Series',
        url: '/content/series',
      },
      {
        name: 'Royalties',
        url: '/content/royalty',
      },
    ],
  },

  {
    name: 'Systems',
    url: '/system',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Permissions',
        url: '/system/roles',
      },
      {
        name: 'Users',
        url: '/system/users',
      },
    ],
  },
];
