import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginScreen, AppScreen } from 'src/screens'

export const App: React.FC<{}> = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={AppScreen} />
      <Route path="/login" component={LoginScreen} />
    </Switch>
  </Router>
)
