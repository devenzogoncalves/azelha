import { styled } from '@/../stitches.config';
import Link from 'next/link';

const CallToAction = styled(Link, {
  fontSize: '2rem',
  gridArea: 'btn',
  backgroundColor: 'lime',
  height: 'min-content',
  padding: '2rem 5rem',
  borderRadius: '1rem',
  color: '$gray950',
  fontWeight: 'bold',
  textTransform: 'uppercase',
});

export default CallToAction;
