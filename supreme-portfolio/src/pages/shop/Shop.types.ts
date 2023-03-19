export type Tag = 'CV' | 'CG' | 'SWE' | 'WEBDEV' | 'UI' | 'MUSIC' | 'GAMEDEV';
export const ALL = [
  'CV',
  'CG',
  'SWE',
  'WEBDEV',
  'UI',
  'MUSIC',
  'GAMEDEV',
] as Tag[];

export type ShoppingItem = {
  name: string;
  image: string;
  tags: Tag[];
};

export type ItemProps = Omit<ShoppingItem, 'tags'>;
