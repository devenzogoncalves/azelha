import { styled } from '@/../stitches.config';

const HeaderWrapper = styled('div', {
  '@md': {
    display: 'grid',
    gap: '5rem',
    justifyItems: 'center',
    alignItems: 'top',
    gridTemplateAreas: `'title img' 'btn img'`,
  },
});

export default HeaderWrapper;
