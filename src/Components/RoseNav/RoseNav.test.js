import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import RoseNav from './RoseNav';

describe ('RoseNav Component', () => {
    it ('renders the complete RoseNav Component', () => {
        const wrapper = shallow(<RoseNav/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})