import React, { useState, useEffect } from 'react';

import EventCardText from '../EventCardText';
import EventCardPopover from '../EventCardPopover';

import { EventStack, ImageComponent, ZeroSelected } from '../../styles/Events/index';

import { EventCard, EventCardContainer } from '../../styles/EventCard';
import { Data } from '../../interfaces';

import { api } from '../../services';
import { Box, Fade } from '@mui/material';

type Props = {
  filters: string[];
};

const filtersDictionary: Record<string, string> = {
  event: 'Evento',
  release: 'Comunicado',
  publication: 'Publicação',
};

const Events: React.FC<Props> = ({ filters }) => {
  const [data, setData] = useState<Data[]>([]);

  const getData = () => {
    api.get('/data.json').then(e => {
      setData(e.data.data);
    });
  };

  useEffect(() => getData, []);

  const handle_delete_action = (identifier: number): any => {
    setData(data.filter((e, filterKey) => identifier !== filterKey));
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      <EventStack>
        {data
          ?.filter(value => !filters.length || filters.includes(filtersDictionary[value.type]))
          .map((e, key) => {
            return (
              <Fade in timeout={(key + 1) * 250} key={key}>
                <Box>
                  <EventCard sx={{ alignItems: { sm: 'center' } }}>
                    <EventCardContainer sx={{ flexDirection: { md: 'row' } }}>
                      <ImageComponent key={key}>
                        <img src={e.file?.url} alt="grid-image" loading="lazy" />
                      </ImageComponent>
                      <EventCardText info={e.info} invited_people={e.invited_people} type={e.type} title={e.title} description={e.description} />
                    </EventCardContainer>
                    <EventCardPopover identifier={key} handle_delete_action={handle_delete_action} />
                  </EventCard>
                </Box>
              </Fade>
            );
          })}
      </EventStack>
      {!data.length && <ZeroSelected variant="subtitle1">Nenhum evento selecionado.</ZeroSelected>}
    </Box>
  );
};

export default Events;
