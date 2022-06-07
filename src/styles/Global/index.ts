import styled from '@emotion/styled';
import { Box } from '@mui/system';

export const Aside = styled(Box)({
  display: 'flex',
  gap: 30,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
});

export const Section = styled(Box)({
  display: 'flex',
  width: '100%',
  flexDirection: 'column',
});

export const Wrapper = styled(Box)({
  display: 'flex',
  gap: 30,
  padding: '25px',
  justifyContent: 'space-between',
  flexDirection: 'column',
  width: '100%',
});

export const PopoverButton = styled('button')({
  display: 'flex',
  color: '#707070',
  backgroundColor: 'transparent',
  '&:hover': {
    cursor: 'pointer',
  },
  border: 'none',
  borderRadius: '50%',
});
