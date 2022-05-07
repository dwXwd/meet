Feature: Filter events by city

Scenario :When a user hasn’t searched for a city, show upcoming events from all 
cities.
Given: The user has not yet specified a city
When: The app is opened.
Then: All events are shown.

Scenario :User should see a list of suggestions when they search for a city.
Given: The user is on the main-screen.
When:The user starts typing.
Then: The app will suggest entries that fit the input.

Scenario :User can select a city from the suggested list.
Given: The „suggested“ list is shown.
When: The user clicks on one of the suggested city.
Then: The user’s city should be changed into the suggested city and eventss in that city should be displayed.
