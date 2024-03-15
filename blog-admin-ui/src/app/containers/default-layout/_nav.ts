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
    attributes: {
      policyName: 'Permissions.Dashboard.View',
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
        attributes: {
          policyName: 'Permissions.PostCategories.View',
        },
      },
      {
        name: 'Posts',
        url: '/content/posts',
        attributes: {
          policyName: 'Permissions.Posts.View',
        },
      },
      {
        name: 'Series',
        url: '/content/series',
        attributes: {
          policyName: 'Permissions.Series.View',
        },
      },
      {
        name: 'Royalties',
        url: '/content/royalty',
        attributes: {
          policyName: 'Permissions.Loyalty.View',
        },
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
        attributes: {
          policyName: 'Permissions.Roles.View',
        },
      },
      {
        name: 'Users',
        url: '/system/users',
        attributes: {
          policyName: 'Permissions.Users.View',
        },
      },
    ],
  },
];
