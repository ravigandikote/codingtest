import React from 'react'

function AppRoute (props) {
  const { hideNavBar, Component, ...rest } = props
  return <Component {...rest} />
}

export default AppRoute
