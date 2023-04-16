import { BUILD_MANIFEST } from 'next/dist/shared/lib/constants';
import Head from 'next/head';

import S from '@/components/styles';
import Header from '@/components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dê um boost no seu negócio</title>
      </Head>

      <S.Main>
        <Header />
        <S.Section>
          <h2>Olá! 01</h2>
        </S.Section>
        <S.Section>
          <h2>Olá! 02</h2>
        </S.Section>
        <S.Section>
          <h2>Olá! 03</h2>
        </S.Section>
        <S.Section>
          <h2>Olá! 04</h2>
        </S.Section>
      </S.Main>
    </>
  );
}
