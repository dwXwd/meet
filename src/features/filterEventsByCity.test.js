import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import { mockData } from '../mock-data';
import { mount, shallow } from 'enzyme';
import CitySearch from '../CitySearch';
import { extractLocations } from "../api";

const feature = loadFeature('./src/features/filterEventsByCity.feature');
const locations = extractLocations(mockData);

defineFeature(feature, test => {

    test('When a user hasn’t searched for a city, show upcoming events from all cities.', ({ given, when, then }) => {
        given('The user has not yet specified a city', () => {

        });

        let AppWrapper;

        when('The app is opened.', () => {
            AppWrapper = mount(<App />);
        });

        then('All events are shown.', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.event').hostNodes()).toHaveLength(mockData.length);
        });
    });

    test('User should see a list of suggestions when they search for a city.', ({ given, when, then }) => {

        let CitySearchWrapper;

        given('The user is on the main-screen.', () => {
            CitySearchWrapper = shallow(<CitySearch updateEvents={() => { }} locations={locations} />);
        });



        when('The user starts typing.', () => {
            CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
        });

        then('The app will suggest entries that fit the input.', () => {
            expect(CitySearchWrapper.find('.suggestions li')).toHaveLength(2);
        });
    });

    test('User can select a city from the suggested list.', ({ given, when, then, and }) => {

        let AppWrapper;

        given('The „suggested“ list is shown.', async () => {
            AppWrapper = await mount(<App />);
            AppWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
        });

        and('the list of suggested cities is showing.', () => {
            AppWrapper.update();
            expect(AppWrapper.find('.suggestions li')).toHaveLength(2);
        });

        when('The user clicks on one of the suggested cities.', () => {
            AppWrapper.find('.suggestions li').at(0).simulate('click');
        });

        then('The user’s city should be changed into the suggested city and eventss in that city should be displayed.', () => {
            const CitySearchWrapper = AppWrapper.find(CitySearch);
            expect(CitySearchWrapper.state('query')).toBe('Berlin, Germany');
        });
    });


});