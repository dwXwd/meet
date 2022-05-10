Feature: SPECIFY NUMBER OF EVENTS
Scenario:When user hasn’t specified a number, 32 is the default number.
Given The app is displaying a list of events.
When The user does not change the number of events they want to see.
Then The default number that will be used is 32.

Scenario: User can change the number of events they want to see.
Given The app is displaying a list of events.
When The user changes the „number of events“ setting.
Then The number of displayed events gets modified.
