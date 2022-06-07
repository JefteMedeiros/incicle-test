import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const NavContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  alignItems: 'flex-start',
  flexDirection: 'column',
  gap: 10,
  justifyContent: 'space-between',
});

export const NavButtons = styled(Box)({
  display: 'flex',
  gap: 10,
});

export const NavTitle = styled(Typography)({
  color: '#707070',
  fontWeight: 300,
  alignSelf: 'flex-end',
  width: '100%',
});
