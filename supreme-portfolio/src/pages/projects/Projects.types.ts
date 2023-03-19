import { Dispatch, SetStateAction } from 'react';

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

export type ProjectItem = {
  name: string;
  image: string;
  tags: Tag[];
};

export type ItemProps = Omit<ProjectItem, 'tags'>;

export type TagProps = {
  tag: TagPair;
  isSelected: boolean;
  select: Dispatch<SetStateAction<Tag>>;
};

export type TagPair = {
  displayName: String;
  tag: Tag;
};
