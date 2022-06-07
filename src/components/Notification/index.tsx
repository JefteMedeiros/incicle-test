import React, { useState } from 'react';

import { Typography } from '@mui/material';
import { NotificationBox, NotificationButton, NotificationTitle } from '../../styles/Notification';

const Notification: React.FC = () => {
  const [toggled, setToggled] = useState(true);

  return (
    <>
      {toggled && (
        <NotificationBox>
          <NotificationTitle variant="h6">Endomarketing</NotificationTitle>
          <Typography>
            Endomarketing está relacionado às ações de treinamento ou qualificação dos colaboradores da empresa visando um melhor serviço para o
            cliente. Marketing interno, devido ao nome, é usualmente confundido com Endomarketing mesmo sendo conceitos diferentes.
          </Typography>
          <NotificationButton onClick={() => setToggled(false)} variant="outlined">
            Dispensar
          </NotificationButton>
        </NotificationBox>
      )}
    </>
  );
};

export default Notification;
