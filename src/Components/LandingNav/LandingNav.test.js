import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import LandingNav from './LandingNav';

describe ('LandingNav Component', () => {
    it ('renders the complete LandingNav Component', () => {
        const wrapper = shallow(<LandingNav/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})


