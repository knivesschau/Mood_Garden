import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import RegistrationForm from './RegistrationForm';

describe ('RegistrationForm Component', () => {
    it ('renders the complete RegistrationForm Component', () => {
        const wrapper = shallow(<RegistrationForm/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})