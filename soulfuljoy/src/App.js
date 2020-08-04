import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Analytics from 'react-router-ga';

import Navigation from './components/nav/Navigation';
import TestPage from './pages/TestPage';
import TestPage2 from './pages/TestPage2';
import TestPage3 from './pages/TestPage3';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    splashPage: true,
    location: window.location.pathname,
  };

  constructor(props) {
    super(props);
    this.location = window.location.pathname;
  }

  // componentDidUpdate() {
  // }
  //
  componentDidMount() {

  }
  //
  // componentWillUnmount() {
  // }


  render() {
    return (
      <BrowserRouter>
        <Analytics id="UA-172409870-1">
          <React.Fragment>
            <main className="main-content">
              <Navigation
              />
              <Switch>
              <Route path="/welcome" render={(props) => <WelcomePage {...props}
              />}/>
              <Route path="/home" render={(props) => <HomePage {...props}

              />}/>
              <Route path="/test" render={(props) => <TestPage {...props}

              />}/>
              <Route path="/test2" render={(props) => <TestPage2 {...props}

              />}/>
              <Route path="/test3" render={(props) => <TestPage3 {...props}

              />}/>

              <Redirect from="/" to="/welcome" exact />
              <Redirect from="*" to="/welcome" exact />
              </Switch>
            </main>
          </React.Fragment>
        </Analytics>
      </BrowserRouter>
    );
  }
}

export default App;
