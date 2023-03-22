import { Dispatch, SetStateAction } from 'react';
import { ProjectItem } from '../../hooks/useProjects';

export type Tag =
  | 'CV'
  | 'CG'
  | 'SWE'
  | 'WEBDEV'
  | 'UI'
  | 'MEDIA'
  | 'GAMEDEV'
  | undefined;
export const ALL = [
  'CV',
  'CG',
  'SWE',
  'WEBDEV',
  'UI',
  'MEDIA',
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

export type AllTagProps = Omit<TagProps, 'tag'>;

export type TagPair = {
  displayName: String;
  tag: Tag;
};
