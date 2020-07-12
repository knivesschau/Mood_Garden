import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import GardenNav from './GardenNav';

describe.skip ('GardenNav Component', () => {
    it ('renders the complete GardenNav Component', () => {
        const wrapper = shallow(<GardenNav/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})

