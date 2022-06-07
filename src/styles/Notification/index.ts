import { Button, styled, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const NotificationBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  width: '280px',
  padding: '25px 15px',
  backgroundColor: '#FFF2DE',
  color: '#707070',
  border: '1px solid #DCD1C0',
});

export const NotificationTitle = styled(Typography)({
  fontWeight: 'bold',
});

export const NotificationButton = styled(Button)({
  color: '#707070',
  border: '1px solid #707070',
  '&:hover': {
    border: '1px solid #707070',
  },
  alignSelf: 'flex-start',
  marginTop: 10,
});
