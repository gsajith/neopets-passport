import React from 'react';
import {
  Switch, Route, Redirect, BrowserRouter as Router,
} from 'react-router-dom';
import appRoutes from './shared/appRoutes';

import HomePage from './containers/HomePage/HomePage';
import WorldDetailsPage from './containers/WorldDetailsPage/WorldDetailsPage';
import PassportPage from './containers/PassportPage/PassportPage';
import Modal from './containers/Modal/Modal';
import sublocations from './shared/sublocations';

import './App.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.showDetails = this.showDetails.bind(this);
    this.hideDetails = this.hideDetails.bind(this);
    this.showPassport = this.showPassport.bind(this);
    this.hidePassport = this.hidePassport.bind(this);
    this.resetPassport = this.resetPassport.bind(this);
    this.stampPassport = this.stampPassport.bind(this);

    this.state = {
      detailsShown: false,
      shownWorld: null,
      passportShown: false,
      stampedLocations: sublocations.reduce((map, obj) => ((map[obj.id] = false, map)), {}),
    };
  }

  componentDidMount() {
    if (localStorage.getItem('stampedLocations') !== null) {
      this.setState({
        stampedLocations: JSON.parse(localStorage.getItem('stampedLocations')),
      });
    }
  }

  showDetails(world) {
    this.setState({
      detailsShown: true,
      shownWorld: world,
    });
  }

  hideDetails() {
    this.setState({
      detailsShown: false,
    });
  }

  showPassport() {
    this.setState({
      passportShown: true,
    });
  }

  hidePassport() {
    this.setState({
      passportShown: false,
    });
  }

  stampPassport(id) {
    this.setState((prevState) => {
      const stampedLocations = { ...prevState.stampedLocations };
      stampedLocations[id] = Math.floor(Math.random() * 6);
      return { stampedLocations };
    }, () => {
      const { stampedLocations } = this.state;
      localStorage.setItem('stampedLocations', JSON.stringify(stampedLocations));
    });
  }

  resetPassport() {
    this.setState({
      stampedLocations: sublocations.reduce((map, obj) => ((map[obj.id] = false, map)), {}),
    }, () => {
      const { stampedLocations } = this.state;
      localStorage.setItem('stampedLocations', JSON.stringify(stampedLocations));
    });
  }

  render() {
    const {
      detailsShown, shownWorld, passportShown, stampedLocations,
    } = this.state;
    return (
      <div className="App">
        <Router>
          <Modal show={detailsShown} handleClose={this.hideDetails}>
            {[<WorldDetailsPage
              key="0"
              id={shownWorld}
              stampPassport={this.stampPassport}
              stampedLocations={stampedLocations}
            />]}
          </Modal>
          <Modal show={passportShown} handleClose={this.hidePassport}>
            {[<PassportPage
              key="0"
              resetPassport={this.resetPassport}
              stampedLocations={stampedLocations}
            />]}
          </Modal>
          <Switch>
            <Route
              exact
              path={appRoutes.home}
              render={() => (
                <HomePage
                  showDetails={this.showDetails}
                  showPassport={this.showPassport}
                />
              )}
            />
            <Route exact path={appRoutes.worldDetail}>
              <WorldDetailsPage
                stampPassport={this.stampPassport}
                stampedLocations={stampedLocations}
              />
            </Route>
            <Route exact path={appRoutes.passport}>
              <PassportPage
                resetPassport={this.resetPassport}
                stampedLocations={stampedLocations}
              />
            </Route>
            <Redirect to={appRoutes.home} />
          </Switch>
        </Router>
      </div>
    );
  }
}
