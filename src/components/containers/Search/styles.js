import styled from 'styled-components'
import px2vw from 'utils/px2vw'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;
  margin: 0 auto;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    margin: 0 auto;
  }
`

export const Box = styled.div`
  display: flex;
  width: ${px2vw(420, 420)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  color: ${props => props.theme.colors.white};

  margin: ${px2vw(20)};
  background-color: ${props => props.theme.colors.lightBlue};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(420, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(600)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`

export const BoxTitle = styled.h3`
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`

export const BoxTitleDiv = styled.div`
  font-size: 2rem;
  margin: 0;
  padding: 1rem;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
  background-color: ${props => props.theme.colors.primary};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`

export const BoxTextDiv = styled.div`
  padding: 1rem;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
  background-color: ${props => props.theme.colors.white};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`

export const BoxText = styled.div`
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`

export const SearchFieldBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  display: block;
`

export const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props =>
    props.primary ? props => props.theme.colors.primary : 'white'};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  height: 30px;
  width: auto;
  font-size: 0.6em;
  cursor: pointer;

  padding: 0.25em 1em;
  border-radius: 10px;

  @media (min-width: 768px) {
    height: 30px;
  }

  @media (min-width: 1024px) {
    height: 80px;
  }
`

export const TagsBox = styled.div`
  padding: 1rem;
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
  background-color: ${props => props.theme.colors.white};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`
