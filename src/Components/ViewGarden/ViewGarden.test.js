import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import ViewGarden from './ViewGarden';

describe ('ViewGarden Component', () => {
    it ('renders the complete ViewGarden Component and all nested Components', () => {
        const wrapper = shallow(<ViewGarden/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})