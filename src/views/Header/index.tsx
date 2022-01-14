import React from 'react';


import { Container, Logo, } from './styles';

const Header: React.FC = () => {

  return (
    <Container>
      <a href="/">
        <Logo src="https://hermes.digitalinnovation.one/assets/diome/logo.svg" />
        Open Source
      </a>
    </Container>
  )
}

export default Header;