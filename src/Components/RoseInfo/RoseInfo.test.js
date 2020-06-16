import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import RoseInfo from './RoseInfo';

describe ('RoseInfo Component', () => {
    it ('renders the complete RoseInfo Component', () => {
        const wrapper = shallow(<RoseInfo/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})