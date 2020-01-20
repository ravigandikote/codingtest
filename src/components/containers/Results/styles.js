import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  max-width: 100%;
  margin: 0 auto;
  padding-bottom: 120px;
  @media (min-width: 1024px) {
    flex-wrap: nowrap;
    margin: 0 auto;
  }
`
