import { ALL, ProjectItem } from '../Projects.types';

function useProjects(): ProjectItem[] {
  const ShoppingItems = [
    {
      name: 'Gale–Shapley-Algorithm Algodat',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ['SWE'],
    },
    {
      name: 'A* Algorithm Algodat',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ['SWE'],
    },
    {
      name: 'Movie Podcast audividprod',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ['MUSIC'],
    },
    {
      name: 'AVL search tree Algodat',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ['SWE'],
    },
    {
      name: 'Barnes-Hut-Algorithm EP2',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ['SWE'],
    },
    {
      name: 'Rasterizer EVC',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ['CG'],
    },
    {
      name: 'Image Processing EVC',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ['CV'],
    },
    {
      name: 'Photggrammetry and 3D Modelling EVC',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ['CG', 'CV'],
    },
    {
      name: 'Traffic Sign Recognition EDBV',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ['CV'],
    },
    {
      name: 'Fashion App Design IID',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ['UI'],
    },
    {
      name: 'Paypal design IID',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ['UI'],
    },
    {
      name: 'Greed ogl cg',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ['CG', 'MUSIC'],
    },
    {
      name: 'mail server ds',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ['SWE'],
    },
    {
      name: 'volume rendering Vis1',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ['CG', 'WEBDEV'],
    },
    {
      name: 'Ticketline SEpm',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ['SWE', 'WEBDEV'],
    },
    {
      name: 'Supreme Portfolio',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ['WEBDEV'],
    },
    {
      name: 'Resume CV',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ALL,
    },
    {
      name: 'WOLUM Music',
      image:
        'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
      tags: ['MUSIC'],
    },
  ] as ProjectItem[];

  return ShoppingItems;
}

export default useProjects;
