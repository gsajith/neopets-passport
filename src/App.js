import React from 'react';
import {
  Switch, Route, Redirect, BrowserRouter as Router,
} from 'react-router-dom';
import appRoutes from './shared/appRoutes';

import HomePage from './containers/HomePage/HomePage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={appRoutes.home}>
            <HomePage name="Name" />
          </Route>
          {/* <Route exact path={appRoutes.world}> */}
          {/*   <WorldPage /> */}
          {/* </Route> */}
          <Redirect to={appRoutes.home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
