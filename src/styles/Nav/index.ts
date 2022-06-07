import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const NavContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'column',
  gap: 10,
  justifyContent: 'space-between',
});

export const NavButtons = styled(Box)({
  display: 'flex',
  flexDirection:"column",
  gap: 10,
});

export const NavTitle = styled(Typography)({
  color: '#707070',
  fontWeight: 300,
  textAlign:"center",
  width: '100%',
});
