import React from 'react';

import { Box } from '@mui/material';

import { AvatarBox, AvatarDescription, AvatarImg, AvatarImgDiv } from '../../styles/Modal';

interface Props {
  name: string;
  confirmed_presence: boolean;
  avatar: string;
  username: string;
}

const ModalUser: React.FC<Props> = ({ name, confirmed_presence, avatar, username }) => {
  return (
    <AvatarBox>
      <AvatarImgDiv>
        <AvatarImg src={avatar} onError={(e: any) => (e.target.src = '../../../public/img/avatar.png')} alt="Foto do usuário" />
      </AvatarImgDiv>
      <Box>
        <AvatarDescription variant="subtitle1">{name}</AvatarDescription>
        <AvatarDescription variant="subtitle2">{confirmed_presence ? 'Presença: Confirmada' : 'Presença: Não confirmada'}</AvatarDescription>
        <AvatarDescription variant="subtitle2">{`Username: ${username}`}</AvatarDescription>
      </Box>
    </AvatarBox>
  );
};

export default ModalUser;
