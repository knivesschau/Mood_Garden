import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import EditRose from './EditRose';

describe ('EditRose Component', () => {
    it ('renders the complete EditRose Component and all nested Components', () => {
        const wrapper = shallow(<EditRose/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})