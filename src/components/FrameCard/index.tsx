import React, { useState, useEffect } from 'react';

import { Board } from '../../interfaces';
import { ZeroSelected } from '../../styles/Events';

import FrameGridImage from '../FrameGridImage';
import FrameCardTitle from '../FrameCardTitle';

import { FrameCardContainer, FrameCardDiv, ImageGrid } from '../../styles/Frame/index';

import { api } from '../../services';
import { Slide } from '@mui/material';
import { Box } from '@mui/system';

const FrameCard: React.FC = () => {
  const [data, setData] = useState<Board[]>([]);

  useEffect(() => {
    api.get('/management.json').then(e => {
      setData(e.data.data[0].boards);
    });
  }, []);

  const handle_delete_action = (identifier: number) => {
    setData(data.filter((e, filterKey) => identifier !== filterKey));
  };

  return (
    <Box sx={{ overflow: 'hidden', display: 'flex', flexDirection: 'column', gap: 1 }}>
      {data.map((e, key) => {
        return (
          <Slide direction="left" key={key} timeout={(key + 1) * 300} in={true}>
            <FrameCardContainer>
              <FrameCardDiv>
                <FrameCardTitle identifier={key} handle_delete_action={handle_delete_action} title={e.title} />
              </FrameCardDiv>
              <ImageGrid cols={4}>
                <FrameGridImage imgArray={e.resume_files} />
              </ImageGrid>
            </FrameCardContainer>
          </Slide>
        );
      })}
      {!data.length && <ZeroSelected variant="subtitle1">Nenhum quadro disponível.</ZeroSelected>}
    </Box>
  );
};

export default FrameCard;
