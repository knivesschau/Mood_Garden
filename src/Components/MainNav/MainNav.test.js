import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import MainNav from './MainNav';

describe ('MainNav Component', () => {
    it ('renders the complete MainNav Component', () => {
        const wrapper = shallow(<MainNav/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})


