import styled from '@emotion/styled';
import { ImageListItem, Stack, Typography } from '@mui/material';

export const EventDate = styled(Typography)({
  fontSize: '10px',
});

export const EventStack = styled(Stack)({
  marginTop: '10px',
});

export const ImageComponent = styled(ImageListItem)({
  width: '80px',
});

export const InvitedPeople = styled(Typography)({
  color: '#3498b1',
  '&:hover': {
    cursor: 'pointer',
  },
});

export const ZeroSelected = styled(Typography)({
  color: '#707070',
});
