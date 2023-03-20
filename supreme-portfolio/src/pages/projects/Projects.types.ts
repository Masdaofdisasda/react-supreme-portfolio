import { Dispatch, SetStateAction } from 'react';
import { ProjectItem } from '../../hooks/useProjects';

export type Tag =
  | 'CV'
  | 'CG'
  | 'SWE'
  | 'WEBDEV'
  | 'UI'
  | 'MUSIC'
  | 'GAMEDEV'
  | undefined;
export const ALL = [
  'CV',
  'CG',
  'SWE',
  'WEBDEV',
  'UI',
  'MUSIC',
  'GAMEDEV',
] as Tag[];

export type ItemProps = Omit<
  ProjectItem,
  'tags' | 'technologies' | 'price' | 'description'
>;

export type TagProps = {
  tag: TagPair;
  isSelected: boolean;
  select: Dispatch<SetStateAction<Tag>>;
};

export type TagPair = {
  displayName: String;
  tag: Tag;
};
