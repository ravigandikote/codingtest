import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from 'store'
import Theme from 'config/Theme'
import ROUTES, { RenderRoutes } from 'routes'
import Shell from 'containers/Shell/index'
import Global from 'assets/styles/global'

const wrapper = document.getElementById('coding-exercise')
wrapper
  ? ReactDOM.render(
    <Provider store={store}>
      <Theme>
        <Global />
        <Shell>
          <RenderRoutes routes={ROUTES} />
        </Shell>
      </Theme>
    </Provider>,
    wrapper
  )
  : false
