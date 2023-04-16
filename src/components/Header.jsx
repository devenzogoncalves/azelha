import S from '@/components/styles';
import Image from 'next/image';
import Navbar from './Navbar';

export default function Header() {
  return (
    <S.Header>
      <Navbar />
      <S.HeaderWrapper>
        <S.Title>
          Tenha uma landing page de alto nível e&nbsp;
          <span style={{ color: 'lime' }}>multiplique os resultados </span>
          do seu negócio
        </S.Title>

        <Image
          src="@/../assets/responsiveScreens.svg"
          width="500"
          height="500"
          style={{ gridArea: 'img' }}
          alt="Imagem de um notebook, um tablet e um celular para indicar responsividade"
        />

        <S.CallToAction href="#">
          Quero multiplicar meus resultados
        </S.CallToAction>
      </S.HeaderWrapper>
    </S.Header>
  );
}
