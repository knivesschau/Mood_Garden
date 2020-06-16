import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Rose from './Rose';

describe ('Rose Component', () => {
    it ('renders the complete Rose Component', () => {
        const wrapper = shallow(<Rose/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})