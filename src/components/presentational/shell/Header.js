import React from 'react'
import styled from 'styled-components'
import Logo from 'assets/images/logo.png'

const Container = styled.div`
  width: 100%;
  height: 120px;
  padding: 20px;
  background-color: ${props => props.theme.colors.header};
  font-family: ${props => props.theme.fonts[0]};

  img {
    cursor: pointer;
  }
`

const Header = ({}) => (
  <>
    <Container>
      <a href='/'>
        /*<img src={Logo} href='/' />*/
      </a>
    </Container>
  </>
)

export default Header
