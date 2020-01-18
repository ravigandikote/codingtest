import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import SearchContainer from 'container/SearchContainer'
import ResultsContainer from 'container/ResultsContainer'
import Shell from 'container/Shell'
import AppRoute from './AppRoute.js'

class Routes extends Component {
  constructor (props, context) {
    super(props, context)
  }

  render () {
    return (
      <Router>
        <Shell>
          <Switch>
            <Route exact path='/'>
              <AppRoute Component={SearchContainer} />
            </Route>
            <Route path='/results/:searchText'>
              <AppRoute Component={ResultsContainer} />
            </Route>
          </Switch>
        </Shell>
      </Router>
    )
  }
}

export default Routes
