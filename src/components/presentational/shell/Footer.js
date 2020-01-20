import React from 'react'
import styled from 'styled-components'
import { FOOTER_COPYRIGHT_TEXT } from 'config/Constants'

const Container = styled.div`
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.footer};
  padding: 2rem;

  position: fixed;
  bottom: 0;
  width: 100%;
  /* Height of the footer*/
  height: 60px;
`

const Copyright = styled.h6``

const Footer = ({}) => (
  <>
    <Container>
      <Copyright>{FOOTER_COPYRIGHT_TEXT}</Copyright>
    </Container>
  </>
)

export default Footer
