import { Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import PublicIcon from '@mui/icons-material/Public';
import PendingIcon from '@mui/icons-material/Pending';
import { ImageList } from '@mui/material';
import styled from '@emotion/styled';

export const FrameBox = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  gap: 10,
  width: '280px',
  padding: '25px 15px',
  backgroundColor: '#FDFDFD',
  borderRadius: '10px',
});

export const FrameTitle = styled(Typography)({
  color: '#707070',
  fontWeight: 'bold',
});

export const FrameCardContainer = styled(Box)({
  backgroundColor: '#E9F1F5',
  color: '#707070',
});

export const FrameCardDiv = styled(Box)({
  display: 'flex',
  padding: '0 5px',
  justifyContent: 'space-between',
  gap: 1,
  alignItems: 'center',
});

export const Globe = styled(PublicIcon)({
  fontSize: '16px',
  backgroundColor: '#FFFFFF',
  padding: 1,
  borderRadius: '50%',
});

export const Dots = styled(PendingIcon)({
  fontSize: '16px',
  backgroundColor: '#FFFFFF',
  padding: 1,
  borderRadius: '50%',
});

export const ImageGrid = styled(ImageList)({
  width: '100%',
  padding: 10,
});
