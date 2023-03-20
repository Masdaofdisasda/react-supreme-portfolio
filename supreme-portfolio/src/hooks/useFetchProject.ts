import useProjects, { ProjectItem } from './useProjects';

function useFetchProject(key: string | undefined): ProjectItem | undefined {
  const projects = useProjects();

  if (!key) {
    return undefined;
  }

  return projects.find((project) => project.id === key);
}

export default useFetchProject;
