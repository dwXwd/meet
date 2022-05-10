import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";

import App from "../App";

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, (test) => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {

        let AppWrapper;

        given('A list of event is shown.', () => {
            AppWrapper = mount(<App />);
        });

        when('The user does simply scrolls through the list.', () => {

        });

        then('All event’s details should be hidden.', () => {
            expect(AppWrapper.find('.extra-details')).toHaveLength(0)
        });
    });


    test('User can expand an event to see its details.', ({ given, when, then }) => {
        let AppWrapper;

        given('The user is shown a list of events', async () => {
            AppWrapper = await mount(<App />);
        });

        when('The user clicks on an event.', () => {
            AppWrapper.update();
            AppWrapper.find('.details-button').at(0).simulate('click');
        });

        then('The events details are displayed', () => {
            expect(AppWrapper.find('.extra-details')).toHaveLength(1);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        let AppWrapper;
        
        given('An event’s details are currently displayed', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.update();
            AppWrapper.find('.details-button').at(0).simulate('click');
            expect(AppWrapper.find('.extra-details')).toHaveLength(1);
        });

        when('The user clicks on the hide button.', () => {
            AppWrapper.find('.details-button').at(0).simulate('click');
        });

        then('The details become hidden.', () => {
            expect(AppWrapper.find('.extra-details')).toHaveLength(0);
        });
    });

});