import { useMemo } from 'react';

function useNavItems(): string[] {
  return useMemo(() => ['news', 'projects', 'about', 'resume', 'contact'], []);
}

export default useNavItems;
