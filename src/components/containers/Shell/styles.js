import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.lightBlue};
  font-family: ${props => props.theme.fonts[0]};
`

export const MainContent = styled.div`
  width: 100%;

  background-color: ${props => props.theme.colors.palewhite};
  font-family: ${props => props.theme.fonts[0]};
  display: flex;
  align-items: center;
`
