import styled from '@emotion/styled';
import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const CardInfoTitle = styled(Typography)({
  fontWeight: 'bold',
  color: '#707070',
});

export const CardInfoDescription = styled(Typography)({
  color: '#707070',
});

export const CardInfoPlace = styled(Typography)({
  textTransform: 'uppercase',
  fontSize: '10px',
});

export const CardTextContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  color: '#707070',
});

export const CardTextDiv = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

export const CardTextType = styled(Box)({
  alignSelf: 'flex-start',
});

export const EventCard = styled(Paper)({
  backgroundColor: '#FFFFFF',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  color: '#909090',
  padding: '10px',
  margin: '7px 0',
});

export const EventCardContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
});

export const EventCardInfoDiv = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  margin: '0 5px',
});

export const EventCardType = styled(Box)({
  display: 'flex',
  padding: '2px',
  fontSize: '8px',
});
