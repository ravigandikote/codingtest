import React from 'react'
import Header from 'presentational/shell/Header'
import Footer from 'presentational/shell/Footer'
import { Container, MainContent } from './styles'

function Shell (props) {
  return (
    <>
      <Container>
        <Header />
        <MainContent>{props.children}</MainContent>
        <Footer />
      </Container>
    </>
  )
}

export default Shell
