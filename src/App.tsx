import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginScreen, AppScreen, PeopleScreenContainer } from 'src/screens'
import { Provider as ReduxProvider } from 'react-redux'
import { store } from 'rdx/index'

export const App: React.FC<{}> = () => (
  <ReduxProvider store={store}>
    <Router>
      <Switch>
        {/* <Route path="/" exact component={PeopleScreenContainer} /> */}
        <Route path="/login" component={LoginScreen} />
        <Route path="/people" component={PeopleScreenContainer} />
        <Route path="/" exact component={AppScreen} />
      </Switch>
    </Router>
  </ReduxProvider>
)
