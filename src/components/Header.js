import { styled } from '@/../stitches.config';
// import { Section } from './Section';

const Header = styled('header', {
  backgroundColor: '$gray950',
  color: '$gray50',
  height: '100vh',
  display: 'grid',
  placeItems: 'center',
  scrollSnapAlign: 'start',
  borderBottom: '1px solid #333333',
  backgroundImage: `url("../../assets/flash.svg"),
  radial-gradient(
    circle at 80%,
    #4c1d95 0%,
    $gray950 50%)`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: '1000px, 100%',
  backgroundPosition: '150% center, center',
  padding: '0 5rem',

  // borderRadius: '9999px',
  // fontSize: '13px',
  // padding: '10px 15px',
  // '&:hover': {
  //   backgroundColor: 'lightgray',
  // },
});

export default Header;
