import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import RoseMain from './RoseMain';

describe ('RoseMain Component', () => {
    it ('renders the complete RoseMain Component and all nested Components', () => {
        const wrapper = shallow(<RoseMain/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})