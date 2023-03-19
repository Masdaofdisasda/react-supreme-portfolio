import { ALL, Tag } from '../pages/projects/Projects.types';
import React, { useMemo } from 'react';

export type ProjectItem = {
  projectName: string; // name of the project that's showcased
  images: string[]; // links to images
  tags: Tag[]; // Tag for filtering
  //TODO:
  id?: string; // for 'fetching'
  technologies?: string[]; // languages & tools used
  price?: number; // salary increase or somethin WIP
  description?: React.ReactNode; // Text about the project maybe with links
};

function useProjects(): ProjectItem[] {
  return useMemo(() => {
    const projects = [
      {
        projectName: 'Gale–Shapley-Algorithm Algodat',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ['SWE'],
      },
      {
        projectName: 'A* Algorithm Algodat',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ['SWE'],
      },
      {
        projectName: 'Movie Podcast audividprod',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ['MUSIC'],
      },
      {
        projectName: 'AVL search tree Algodat',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ['SWE'],
      },
      {
        projectName: 'Barnes-Hut-Algorithm EP2',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ['SWE'],
      },
      {
        projectName: 'Rasterizer EVC',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ['CG'],
      },
      {
        projectName: 'Image Processing EVC',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ['CV'],
      },
      {
        projectName: 'Photggrammetry and 3D Modelling EVC',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ['CG', 'CV'],
      },
      {
        projectName: 'Traffic Sign Recognition EDBV',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ['CV'],
      },
      {
        projectName: 'Fashion App Design IID',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ['UI'],
      },
      {
        projectName: 'Paypal design IID',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ['UI'],
      },
      {
        projectName: 'Greed ogl cg',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ['CG', 'MUSIC', 'GAMEDEV'],
      },
      {
        projectName: 'mail server ds',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ['SWE'],
      },
      {
        projectName: 'volume rendering Vis1',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ['CG', 'WEBDEV'],
      },
      {
        projectName: 'Ticketline SEpm',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ['SWE', 'WEBDEV'],
      },
      {
        projectName: 'Supreme Portfolio',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ['WEBDEV'],
      },
      {
        projectName: 'Resume CV',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ALL,
      },
      {
        projectName: 'WOLUM Music',
        images: [
          'https://cdn.shopify.com/s/files/1/0644/6861/5398/products/SW67_SS23_WorldFamousHoodedSweatshirt_Purple_720x.jpg?v=1678822302',
        ],
        tags: ['MUSIC'],
      },
    ] as ProjectItem[];

    return projects.sort((a, b) => {
      // @ts-ignore
      return a.projectName.localeCompare(b.projectName);
    });
  }, []);
}

export default useProjects;
