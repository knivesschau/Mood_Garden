import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import LandingPage from './LandingPage';

describe ('LandingPage Component', () => {
    it ('renders the Complete LandingPage Component and all nested Components', () => {
        const wrapper = shallow(<LandingPage/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})