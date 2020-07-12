import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LoginScreen, AppScreen, PeopleScreen } from 'src/screens'
import { Provider as ReduxProvider } from 'react-redux'
import { DynamicModuleLoader } from 'redux-dynamic-modules'
import { store } from 'rdx/index'
import { getPeopleModule } from './modules/people'

export const App: React.FC<{}> = () => (
  <ReduxProvider store={store}>
    <DynamicModuleLoader modules={[getPeopleModule()]}>
      <Router>
        <Switch>
          <Route path="/" exact component={AppScreen} />
          <Route path="/login" component={LoginScreen} />
          <Route path="/people" component={PeopleScreen} />
        </Switch>
      </Router>
    </DynamicModuleLoader>
  </ReduxProvider>
)
