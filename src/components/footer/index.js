import React from 'react'
import { FooterContainer, FooterParteDireita, FooterParteEsquerda, Informacoes,Links } from './footerElements'

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterParteEsquerda>
          <Informacoes>Endereço: rua da pediátria, 23</Informacoes>
          <Informacoes>Email: emailpediasul@gmail.com</Informacoes>
          <Informacoes>Telefone: (11) 91234-5678</Informacoes>
        </FooterParteEsquerda>
        <FooterParteDireita>
          <Links href='#'>Nossa história</Links>
          <Links href='#'>Sobre a pediátria</Links>
          <Links href='#'>Relatos de clientes</Links>
        </FooterParteDireita>
      </FooterContainer>
    </>
  )
}

export default Footer