import React from 'react';

import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';

import { CloseButton, ModalContainer } from '../../styles/Modal';
import ModalUser from '../ModalUser';

interface info {
  id: number;
  name: string;
  confirmed_presence: boolean;
  avatar: string;
  username: string;
}

interface Props {
  openModal: boolean;
  closeModal: Function;
  invited_people: info[];
}

const EventModal: React.FC<Props> = ({ openModal, closeModal, invited_people }) => {
  return (
    <div>
      {openModal && (
        <Modal open={openModal}>
          <ModalContainer>
            <CloseButton onClick={() => closeModal()}>
              <CloseIcon />
            </CloseButton>
            {invited_people.map((e, key) => {
              return <ModalUser username={e.username} key={key} name={e.name} confirmed_presence={e.confirmed_presence} avatar={e.avatar} />;
            })}
          </ModalContainer>
        </Modal>
      )}
    </div>
  );
};

export default EventModal;
