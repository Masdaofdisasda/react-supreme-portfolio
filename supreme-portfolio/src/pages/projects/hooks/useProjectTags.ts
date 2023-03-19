import { TagPair } from '../Projects.types';

function useProjectTags(): TagPair[] {
  const tags = [
    { displayName: 'comp. vis', tag: 'CV' },
    { displayName: 'comp. graphics', tag: 'CG' },
    { displayName: 'sw engineering', tag: 'SWE' },
    { displayName: 'web dev', tag: 'WEBDEV' },
    { displayName: 'ui design', tag: 'UI' },
    { displayName: 'music', tag: 'MUSIC' },
    { displayName: 'game dev', tag: 'GAMEDEV' },
  ] as TagPair[];
  return tags.sort((a, b) => {
    // @ts-ignore
    return a.displayName.localeCompare(b.displayName);
  });
}

export default useProjectTags;
