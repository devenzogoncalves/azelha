import { styled } from '@/../stitches.config';

const Navbar = styled('nav', {
  fontSize: '2rem',
  color: 'white',
  width: '100%',
  position: 'fixed',
  top: '0',
  padding: '2rem 7rem',
  textTransform: 'uppercase',

  '& ul': {
    display: 'flex',
    listStyle: 'none',
  },

  '& ul > *': {
    padding: '.5rem 1rem',
    transition: 'all 300ms',
    textDecoration: 'underline',
    textDecorationColor: 'transparent',
    textUnderlineOffset: '0',
  },

  '& ul > *:not(:first-child)': {
    borderLeft: '1px solid $gray600',
  },

  '& ul > *:hover': {
    textDecorationColor: 'lime',
    textUnderlineOffset: '.5rem',
  },
});

export default Navbar;
