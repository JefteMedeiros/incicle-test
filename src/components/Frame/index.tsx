import { Zoom } from '@mui/material';
import React from 'react';
import { FrameBox, FrameTitle } from '../../styles/Frame';
import FrameCard from '../FrameCard';

const Frame: React.FC = () => {
  return (
    <Zoom in={true} timeout={400}>
      <FrameBox>
        <FrameTitle variant="subtitle1">Quadros de gestão à vista</FrameTitle>
        <FrameCard />
      </FrameBox>
    </Zoom>
  );
};

export default Frame;
