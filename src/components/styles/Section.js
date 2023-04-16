import { styled } from '@/../stitches.config';

const Section = styled('section', {
  backgroundColor: '$gray950',
  color: '$gray50',
  height: '100vh',
  display: 'grid',
  placeItems: 'center',
  scrollSnapAlign: 'start',
  borderBottom: '1px solid #333333',
  padding: '7rem',
});

export default Section;
