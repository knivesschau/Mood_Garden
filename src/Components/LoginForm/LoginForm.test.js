import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import LoginForm from './LoginForm';

describe ('LoginForm Component', () => {
    it ('renders the complete LoginForm Component', () => {
        const wrapper = shallow(<LoginForm/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})