import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
        
        
      </p>
      <a href="https://www.linkedin.com/in/karem-caetano-76922768/">
        Linkedin
        </a>
        <a> | </a>
        <a href="https://twitter.com/SantosCaetanoA1">
          Twitter
        </a>
    </FooterBase>
  );
}

export default Footer;
