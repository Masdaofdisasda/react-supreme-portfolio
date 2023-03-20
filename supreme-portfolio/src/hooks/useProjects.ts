import { Tag } from '../pages/projects/Projects.types';
import React, { useMemo } from 'react';
import galeShapleyAlgo from '../data/galeShapleyAlgo';
import aStarAlgo from '../data/aStarAlgo';
import moviePodcast from '../data/moviePodcast';
import avlSearchTree from '../data/avlSearchTree';
import barnesHutAlgo from '../data/barnesHutAlgo';
import rasterizer from '../data/rasterizer';
import cameraSensor from '../data/cameraSensor';
import photogrammetry from '../data/photogrammetry';
import streetSignRecognition from '../data/streetSignRecognition';
import FashionAppDesign from '../data/fashionAppDesign';
import paypalCloneDesign from '../data/paypalCloneDesign';
import greedGame from '../data/greedGame';
import mailServer from '../data/mailServer';
import volumeRendering from '../data/volumeRendering';
import ticketline from '../data/ticketline';
import portfolio from '../data/portfolio';
import resume from '../data/resume';
import wolumMusic from '../data/wolumMusic';
import wendysHorses from '../data/wendysHorses';

export type ProjectItem = {
  projectName: string; // name of the project that's showcased
  images: string[]; // links to images
  tags: Tag[]; // Tag for filtering
  //TODO:
  id: string; // for 'fetching'
  technologies: string[]; // languages & tools used
  price: number; // salary increase or somethin WIP
  description: React.ReactNode; // Text about the project maybe with links
};

function useProjects(): ProjectItem[] {
  return useMemo(() => {
    const projects = [
      galeShapleyAlgo,
      aStarAlgo,
      moviePodcast,
      avlSearchTree,
      barnesHutAlgo,
      rasterizer,
      cameraSensor,
      photogrammetry,
      streetSignRecognition,
      FashionAppDesign,
      paypalCloneDesign,
      greedGame,
      mailServer,
      volumeRendering,
      ticketline,
      wendysHorses,
      portfolio,
      resume,
      wolumMusic,
    ] as ProjectItem[];

    return projects.sort((a, b) => {
      // @ts-ignore
      return a.projectName.localeCompare(b.projectName);
    });
  }, []);
}

export default useProjects;
