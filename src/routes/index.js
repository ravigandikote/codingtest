import React from 'react'
import SearchContainer from 'containers/Search'
import ResultsContainer from 'containers/Results'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const ROUTES = [
  { path: '/', key: 'ROOT', exact: true, component: SearchContainer },
  {
    path: '/search',
    key: 'APP_SEARCH',
    exact: true,
    component: SearchContainer
  },
  {
    path: '/results/:searchText',
    key: 'APP_RESULTS',
    exact: true,
    component: ResultsContainer
  }
]

export function RenderRoutes ({ routes }) {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => {
          return (
            <Route
              key={route.key}
              path={route.path}
              exact={route.exact}
              render={props => (
                <route.component {...props} routes={route.routes} />
              )}
            />
          )
        })}
        <Route
          component={() => <h2 style={{ padding: '20px' }}>Not Found!</h2>}
        />
      </Switch>
    </Router>
  )
}

export default ROUTES
