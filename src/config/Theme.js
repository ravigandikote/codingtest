import React from 'react'
import { ThemeProvider } from 'styled-components'

const theme = {
  colors: {
    palewhite: '#f0efef',
    powderWhite: '#FFFDF9',
    persianGreen: '#06B49A',
    onyx: '#36313D',
    primary: '#0f4c75',
    header: '#1b262c',
    footer: '#0f4c75',
    white: '#FFFFFF',
    lightblue: '#3282b8',
    black: '#000000'
  },
  fonts: ['sans-serif', 'Roboto'],
  fontSizes: {
    small: '1em',
    medium: '2em',
    large: '3em'
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
