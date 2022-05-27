
# Meet-Up
Meet is an app created to show info about future events in various cities.
It is possible to decide on a city to filter the events further.
Furthermore it is possible to cache information do use the app offline.

## Tools

- Javascript
- React
- gh-pages
- Jest
- Cucumber


## User Stories
- As a user, I want to have a show/hide button, so I can show/hid an event’s details as I please.
- As a user, I want to be able to decide how many events are shown, so I can have a better user experience while I search for events.
- As a user, I want to be able to use the app offline, so I can verify the available events, even when I don‘t have internet connection.
- As a user I want to have access to a chart, so I can consult how many events are in each city.

## Scenarios

- FEATURE 1: FILTER EVENTS BY CITY
- Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
- Scenario 2: User should see a list of suggestions when they search for a city.
- Scenario 3: User can select a city from the suggested list.

- FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS
- Scenario 1: An event element is collapsed by default.
- Scenario 2: User can expand an event to see its details.
- Scenario 3: User can collapse an event to hide its details.

- FEATURE 3: SPECIFY NUMBER OF EVENTS
- Scenario 1: When user hasn’t specified a number, 32 is the default number.
- Scenario 2: User can change the number of events they want to see.

- FEATURE 4: USE THE APP WHEN OFFLINE
- Scenario 1: Show cached data when there’s no internet connection.
- Scenario 2: Show error when user changes the settings (city, time range).

- FEATURE 5: DATA VISUALIZATION
- Scenario 1: Show a chart with the number of upcoming events in each city.

## Key Features
- Filter events by city.
- Show/hide event details.
- Specify number of events.
- Use the app when offline.
- Add an app shortcut to the home screen.
- View a chart showing the number of upcoming events by city.
- View a chart showing the amount of events relative to their event-genre

## Deployment and Demo


To deploy this project run

```bash
  npm run deploy
```


## Demo

### <a href="https://dwxwd.github.io/meet-up/">LIVE DEMO</a> 