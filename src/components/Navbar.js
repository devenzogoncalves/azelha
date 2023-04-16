import S from '@/components/styles';
import Link from 'next/link';

export default function Navbar() {
  return (
    <S.Navbar>
      <ul>
        <Link href="">
          <li>Início</li>
        </Link>
        <Link href="">
          <li>É pra mim?</li>
        </Link>
        <Link href="">
          <li>Vantagens</li>
        </Link>
        <Link href="">
          <li>Especificações</li>
        </Link>
        <Link href="">
          <li>Eu quero</li>
        </Link>
      </ul>
    </S.Navbar>
  );
}
