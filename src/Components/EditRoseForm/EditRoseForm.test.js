import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import EditRoseForm from './EditRoseForm';

describe ('EditRoseForm Component', () => {
    it ('renders the complete EditRoseForm Component', () => {
        const wrapper = shallow(<EditRoseForm/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})