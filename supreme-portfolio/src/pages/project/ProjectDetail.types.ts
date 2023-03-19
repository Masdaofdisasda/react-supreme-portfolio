import { Dispatch, SetStateAction } from 'react';

export type ThumbnailProps = {
  imgSrc: string;
  onClick: Dispatch<SetStateAction<string>>;
  selected: boolean;
};
