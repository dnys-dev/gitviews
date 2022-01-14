import React from 'react';
import { Container, Line, Logo, Content, Link } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Line />
      <Content>
        <Link href="https://web.dio.me/tracks">Bootcamps</Link>
        <Logo src="https://hermes.digitalinnovation.one/assets/diome/logo.svg" />
        <Link href="https://web.dio.me/accelerations">Acelerações</Link>
      </Content>
      <p>Todos Direitos Reservados - 2021 (c)</p>
    </Container>
  );
}

export default Footer;