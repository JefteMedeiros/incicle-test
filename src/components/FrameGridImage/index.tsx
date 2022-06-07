import { ImageListItem } from '@mui/material';
import React from 'react';

type file = {
  file: string;
};

interface Props {
  imgArray: file[];
}

const FrameGridImage: React.FC<Props> = ({ imgArray }) => {
  return (
    <>
      {imgArray.map((e, key) => {
        return (
          <ImageListItem key={key}>
            <img src={e.file} alt="grid-image" loading="lazy" />
          </ImageListItem>
        );
      })}
    </>
  );
};

export default FrameGridImage;
