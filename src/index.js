import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Routes from 'routes'
import store from 'store'

const wrapper = document.getElementById('coding-exercise')
wrapper
  ? ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
    wrapper
  )
  : false
