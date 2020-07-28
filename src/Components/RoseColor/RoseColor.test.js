import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import RoseColor from './RoseColor';

describe ('RoseColor Component', () => {
    it ('renders the complete RoseColor component image', () => {
        const wrapper = shallow(<RoseColor/>)
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})