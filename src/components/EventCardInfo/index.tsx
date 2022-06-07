import React, { useState } from 'react';

import { CardInfoPlace, CardTextContainer, CardTextDiv, CardTextType, EventCardInfoDiv, EventCardType } from '../../styles/EventCard';

import EventModal from '../Modal';

import { EventDate, InvitedPeople } from '../../styles/Events';
import { ModalButton } from '../../styles/Modal';

import { Data } from '../../interfaces/index';

const EventCardTypeObject = {
  event: {
    bg: '#ee8686',
    title: 'EVENTO',
    color: 'black',
  },
  publication: {
    bg: '#707070',
    title: 'PUBLICAÇÃO',
    color: 'white',
  },
  release: {
    bg: '#3489b1',
    title: 'COMUNICADO',
    color: 'white',
  },
};

const EventCardInfo: React.FC<Data> = ({ type, info, invited_people }) => {
  const [openModal, handleOpenModal] = useState(false);

  const handleToggleModal = () => {
    handleOpenModal(!openModal);
  };

  const TypeInfo = EventCardTypeObject[type as keyof typeof EventCardTypeObject];

  return (
    <CardTextContainer>
      <CardTextDiv sx={{ flexDirection: { xs: 'column', sm: 'row' } }}>
        <CardTextType sx={{ lg: { alignSelf: 'center', marginBottom: '0' } }}>
          <EventCardType sx={{ backgroundColor: TypeInfo.bg, color: TypeInfo.color }}>{TypeInfo.title}</EventCardType>
        </CardTextType>
        <EventCardInfoDiv>
          <CardInfoPlace variant="subtitle2">{info?.place}</CardInfoPlace>
          <EventDate variant="subtitle2">{info.date && info.place ? `| ${info.date} |` : info.date}</EventDate>
          <InvitedPeople variant="subtitle2">
            {!!invited_people?.length && <ModalButton onClick={() => handleToggleModal()}>{invited_people?.length} CONFIRMAÇÕES DE 15</ModalButton>}
            {openModal && <EventModal openModal={openModal} invited_people={invited_people} closeModal={handleToggleModal} />}
          </InvitedPeople>
        </EventCardInfoDiv>
      </CardTextDiv>
    </CardTextContainer>
  );
};

export default EventCardInfo;
