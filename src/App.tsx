import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginScreenContainer, AppScreen, PeopleScreen } from 'src/screens'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from 'rdx/index'

export const App: React.FC<{}> = () => (
  <ReduxProvider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={AppScreen} />
        <Route path="/login" component={LoginScreenContainer} />
        <Route path="/people" component={PeopleScreen} />
      </Switch>
    </Router>
  </ReduxProvider>
)
