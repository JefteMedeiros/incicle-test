import * as React from 'react';
import Popover from '@mui/material/Popover';
import PendingIcon from '@mui/icons-material/Pending';
import Button from '@mui/material/Button';

import { PopoverButton } from '../../styles/Global';
import { Box } from '@mui/system';
import { Fade } from '@mui/material';

interface Props {
  identifier: number;
  handle_delete_action: Function;
}

const EventCardPopover: React.FC<Props> = ({ identifier, handle_delete_action }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const open = Boolean(anchorEl);

  const id = open ? 'simple-popover' : undefined;

  const handleDelete = () => {
    handle_delete_action(identifier);
    handleClose();
  };

  return (
    <Fade in timeout={1200}>
      <Box>
        <PopoverButton aria-describedby={id} onClick={handleClick}>
          <PendingIcon />
        </PopoverButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <Button onClick={handleDelete}>EXCLUIR</Button>
        </Popover>
      </Box>
    </Fade>
  );
};

export default EventCardPopover;
