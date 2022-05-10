Feature: SHOW/HIDE AN EVENT’S DETAILS

Scenario: An event element is collapsed by default.
Given A list of event is shown.
When The user does simply scrolls through the list.
Then All event’s details should be hidden.

Scenario: User can expand an event to see its details.
Given The user is shown a list of events
When The user clicks on an event.
Then The events details are displayed

Scenario: User can collapse an event to hide its details.
Given An event’s details are currently displayed
When The user clicks on the hide button.
Then The details become hidden.