import React from 'react';

import { Button, Popover, Typography } from '@mui/material';

import { PopoverButton } from '../../styles/Global';
import { Dots, FrameCardDiv, Globe } from '../../styles/Frame/index';

interface Props {
  title: string;
  handle_delete_action: Function;
  identifier: number;
}

const FrameCardTitle: React.FC<Props> = ({ title, handle_delete_action, identifier }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popover = open ? 'simple-popover' : undefined;

  return (
    <>
      <Typography variant="subtitle2">{title}</Typography>
      <FrameCardDiv>
        <PopoverButton>
          <Globe />
        </PopoverButton>
        <PopoverButton aria-describedby={popover} onClick={handleClick}>
          <Dots />
        </PopoverButton>
        <Popover
          id={popover}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Button
            onClick={() => {
              handle_delete_action(identifier);
              handleClose();
            }}
          >
            Excluir
          </Button>
        </Popover>
      </FrameCardDiv>
    </>
  );
};

export default FrameCardTitle;
