import { BUILD_MANIFEST } from 'next/dist/shared/lib/constants';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Header from '@/components/Header';
import HeaderWrapper from '@/components/HeaderWrapper';
import Section from '@/components/Section';
import Main from '@/components/Main';
import Title from '@/components/Title';
import Navbar from '@/components/Navbar';
import CallToAction from '@/components/CallToAction';

export default function Home() {
  return (
    <>
      <Head>
        <title>Dê um boost no seu negócio</title>
      </Head>

      <Main>
        <Header>
          <Navbar />
          <HeaderWrapper>
            <Title>
              Tenha uma landing page de alto nível e&nbsp;
              <span style={{ color: 'lime' }}>multiplique os resultados </span>
              do seu negócio
            </Title>
            <Image
              src="@/../assets/responsiveScreens.svg"
              width="500"
              height="500"
              style={{ gridArea: 'img' }}
              alt="Imagem de um notebook, um tablet e um celular para indicar responsividade"
            />

            <CallToAction href="#">
              Quero multiplicar meus resultados
            </CallToAction>
          </HeaderWrapper>
        </Header>
        <Section>
          <h2>Olá! 01</h2>
        </Section>
        <Section>
          <h2>Olá! 02</h2>
        </Section>
        <Section>
          <h2>Olá! 03</h2>
        </Section>
        <Section>
          <h2>Olá! 04</h2>
        </Section>
      </Main>
    </>
  );
}
