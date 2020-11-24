import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import WelcomePage from '../WelcomePage/WelcomePage';
import CalendarPage from '../CalendarPage/CalendarPage';
import SettingsPage from '../SettingsPage/SettingsPage';

class App extends Component {
  constructor() {
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();
    super();
    this.state = {
      date: month + "/" + day + "/" + year,
    }
  }

  render() {
    return (
      <div className='App'>
        <NavBar />
        <Switch>
          <Route exact path='/' render={() =>
            <WelcomePage
              date={this.state.date}
            />
          }>
          </Route>
          <Route exact path='/calendar' render={() =>
            <CalendarPage />
          }>
          </Route>
          <Route exact path='/settings' render={() =>
            <SettingsPage />
          }>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
