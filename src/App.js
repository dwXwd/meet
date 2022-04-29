import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';

class App extends Component {
  render() {
    return (
      <div className="App">
        <EventList />
        <CitySearch />
        <NumberOfEvents/>
      </div>
    );
  }
}

export default App;