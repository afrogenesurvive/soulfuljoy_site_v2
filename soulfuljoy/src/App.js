import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Analytics from 'react-router-ga';

import Navigation from './components/nav/Navigation';
import Overlay from './components/overlay/Overlay';
import CookieNotice from './components/notice/Cookie';
import CovidNotice from './components/notice/Covid';
import TeamPage from './pages/TeamPage';
import ExperiencePage from './pages/ExperiencePage';
import PathPage from './pages/PathPage';
import JoyPage from './pages/JoyPage';
import HomePage from './pages/HomePage';
import WelcomePage from './pages/WelcomePage';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    splashPage: true,
    location: window.location.pathname,
    showOverlay: false,
    overlayData: null,
    showCookie: true,
    showCovid: true
  };

  constructor(props) {
    super(props);
    this.location = window.location.pathname;
  }

  // componentDidUpdate() {
  // }
  //
  componentDidMount() {

    if (document.cookie.indexOf("visitedsfj") == -1) {
      console.log('1st_time_user');
      this.setState({showCookie: true})
      document.cookie = 'visitedsfj=yes; expires=Wed, 10 Jan 2022 12:00:00 UTC';
    } else {
      console.log('return_user');
    }
  }

  //
  // componentWillUnmount() {
  // }

  showOverlay = (args) => {
    this.setState({
      showOverlay: true,
      overlayData: args
    })
  }
  closeOverlay = () => {
    this.setState({
      showOverlay: false,
      overlayData: null
    })
  }

  cookieAgree = () => {
    this.setState({showCookie: false})
  }
  covidAgree = () => {
    this.setState({showCovid: false})
  }

  render() {
    return (
      <BrowserRouter>
        <Analytics id="UA-172409870-1">
          <React.Fragment>
            <main className="main-content">
              <Navigation
              />
              {this.state.showOverlay === true && (
                <Overlay
                  data={this.state.overlayData}
                  closeOverlay={this.closeOverlay}
                />
              )}
              {this.state.showCookie === true && (
                <CookieNotice
                  cookieAgree={this.cookieAgree}
                />
              )}
              {this.state.showCovid === true && (
                <CovidNotice
                  covidAgree={this.covidAgree}
                />
              )}
              <Switch>
              <Route path="/welcome" render={(props) => <WelcomePage {...props}

              />}/>
              <Route path="/home" render={(props) => <HomePage {...props}

              />}/>
              <Route path="/team" render={(props) => <TeamPage {...props}
                showOverlay={this.showOverlay}
              />}/>
              <Route path="/experience" render={(props) => <ExperiencePage {...props}
                showOverlay={this.showOverlay}
              />}/>
              <Route path="/path" render={(props) => <PathPage {...props}

              />}/>
              <Route path="/joy" render={(props) => <JoyPage {...props}

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
