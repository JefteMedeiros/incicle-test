import React from 'react';
import EventCardInfo from '../../components/EventCardInfo';

import { Box } from '@mui/material';
import { CardInfoDescription, CardInfoTitle } from '../../styles/EventCard';
import { Data } from '../../interfaces/index';

const EventCardText: React.FC<Data> = ({ invited_people, title, description, type, info, handle_open_modal }) => {
  return (
    <Box>
      <CardInfoTitle variant="h6">{title}</CardInfoTitle>
      <EventCardInfo handle_open_modal={handle_open_modal} info={info} invited_people={invited_people} type={type} />
      <CardInfoDescription variant="subtitle1">{description}</CardInfoDescription>
    </Box>
  );
};

export default EventCardText;
