import { ALL, Tag } from '../pages/projects/Projects.types';
import React, { useMemo } from 'react';
import code from '../images/code.jpg';
import headphones from '../images/headphones.jpg';
import universe from '../images/universe.png';

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
        images: [code],
        tags: ['SWE'],
      },
      {
        projectName: 'A* Algorithm Algodat',
        images: [headphones],
        tags: ['SWE'],
      },
      {
        projectName: 'Movie Podcast audividprod',
        images: [universe],
        tags: ['MUSIC'],
      },
      {
        projectName: 'AVL search tree Algodat',
        images: [code],
        tags: ['SWE'],
      },
      {
        projectName: 'Barnes-Hut-Algorithm EP2',
        images: [headphones],
        tags: ['SWE'],
      },
      {
        projectName: 'Rasterizer EVC',
        images: [universe],
        tags: ['CG'],
      },
      {
        projectName: 'Image Processing EVC',
        images: [code],
        tags: ['CV'],
      },
      {
        projectName: 'Photggrammetry and 3D Modelling EVC',
        images: [headphones],
        tags: ['CG', 'CV'],
      },
      {
        projectName: 'Traffic Sign Recognition EDBV',
        images: [universe],
        tags: ['CV'],
      },
      {
        projectName: 'Fashion App Design IID',
        images: [code],
        tags: ['UI'],
      },
      {
        projectName: 'Paypal design IID',
        images: [headphones],
        tags: ['UI'],
      },
      {
        projectName: 'Greed ogl cg',
        images: [universe],
        tags: ['CG', 'MUSIC', 'GAMEDEV'],
      },
      {
        projectName: 'mail server ds',
        images: [code],
        tags: ['SWE'],
      },
      {
        projectName: 'volume rendering Vis1',
        images: [headphones],
        tags: ['CG', 'WEBDEV'],
      },
      {
        projectName: 'Ticketline SEpm',
        images: [universe],
        tags: ['SWE', 'WEBDEV'],
      },
      {
        projectName: 'Supreme Portfolio',
        images: [code],
        tags: ['WEBDEV'],
      },
      {
        projectName: 'Resume CV',
        images: [headphones],
        tags: ALL,
      },
      {
        projectName: 'WOLUM Music',
        images: [universe],
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
