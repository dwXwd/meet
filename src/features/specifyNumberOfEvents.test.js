import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import NumberOfEvents from "../NumberOfEvents";
import App from "../App";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, (test) => {
    let AppWrapper;

    test('When user hasn’t specified a number, 32 is the default number.', ({ given, when, then }) => {
        given('The app is displaying a list of events.', async () => {
            AppWrapper = await mount(<App />);

        });

        when('The user does not change the number of events they want to see.', () => {
            AppWrapper.update();
        });

        then('The default number that will be used is 32.', () => {
            expect(AppWrapper.find('.event')).toHaveLength(2);
        });
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        given('The app is displaying a list of events.', async () => {
            AppWrapper = await mount(<App />);
        });

        when('The user changes the „number of events“ setting.', () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents)
            NumberOfEventsWrapper.find('.inputNumberOfEvents').simulate('change', { target: { value: 1 } });
        });

        then('The number of displayed events gets modified.', () => {
            const NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents)
            NumberOfEventsWrapper.find('.inputNumberOfEvents').simulate('change', { target: { value: 1 } });
            expect(AppWrapper.state('numberOfEvents')).toEqual(1)
        });
    });

});