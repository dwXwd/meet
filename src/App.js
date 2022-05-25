import React, { Component } from "react";
import "./App.css";
import CitySearch from "./CitySearch";
import EventList from "./EventList";
import "./nprogress.css";
import NumberOfEvents from "./NumberOfEvents";
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from
  './api';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 32,
    currentLocation: "all",
    showWelcomeScreen: undefined
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false :
      true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
  }


  componentWillUnmount() {
    this.mounted = false;
  }

  updateEvents = (location, eventCount = this.state.numberOfEvents) => {
    getEvents().then((events) => {
      const locationEvents =
        location === "all"
          ? events
          : events.filter((event) => event.location === location);
      this.setState({
        events: locationEvents.slice(0, eventCount),
        currentLocation: location,
      });
    });
  };

  updateNumberOfEvents = (numberOfEvents) => {
    this.setState({
      numberOfEvents: numberOfEvents,
    });
    this.updateEvents(this.state.currentLocation, numberOfEvents);
  };

  render() {

    if (this.state.showWelcomeScreen === undefined) return <div
      className="App" />

    const { locations, events } = this.state;
    return (
      <div className='App'>
        <CitySearch
          locations={locations}
          updateEvents={this.updateEvents}
        />
        <NumberOfEvents updateNumberOfEvents={this.updateNumberOfEvents} />
        <EventList events={events} />
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }} />

      </div>
    );
  }
}

export default App;