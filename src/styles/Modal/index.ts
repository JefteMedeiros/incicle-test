import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const ModalButton = styled(Button)({
  fontSize: '10px',
  textDecoration: 'underline',
  border: 0,
  margin: 0,
  padding: 0,
});

export const CloseButton = styled('button')({
  alignSelf: 'flex-end',
  margin: 0,
  padding: 0,
  border: 0,
  backgroundColor: '#e9f1f5',
  '&:hover': {
    cursor: 'pointer',
    backgroundColor: '#e9f1f5',
  },
  color: '#1976d2',
});

export const ModalContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'auto',
  backgroundColor: '#e9f1f5',
  borderRadius: '10px',
  padding: '24px',
});

export const AvatarBox = styled(Box)({
  display: 'flex',
  gap: '20px',
  backgroundColor: '#FFFFFF',
  padding: '16px',
  borderRadius: '10px',
  margin: '15px 0',
});

export const AvatarDescription = styled(Typography)({
  color: '#707070',
  fontWeight: 'bold',
});

export const AvatarImg = styled('img')({
  width: '100px',
  borderRadius: '50%',
  backgroundColor: '#e9f1f5',
});

export const AvatarImgDiv = styled(Box)({
  width: '100px',
  height: '100px',
});
