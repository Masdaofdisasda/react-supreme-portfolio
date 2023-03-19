import { TagPair } from '../Projects.types';

function useProjectTags(): TagPair[] {
  return [
    { displayName: 'comp. vis', tag: 'CV' },
    { displayName: 'comp. graphics', tag: 'CG' },
    { displayName: 'sw engineering', tag: 'SWE' },
    { displayName: 'web dev', tag: 'WEBDEV' },
    { displayName: 'ui design', tag: 'UI' },
    { displayName: 'music', tag: 'MUSIC' },
    { displayName: 'game dev', tag: 'GAMEDEV' },
  ];
}

export default useProjectTags;
