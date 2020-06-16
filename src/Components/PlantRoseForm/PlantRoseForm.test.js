import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import PlantRoseForm from './PlantRoseForm';

describe ('PlantRoseForm Component', () => {
    it ('renders the complete PlantRoseForm Component', () => {
        const wrapper = shallow(<PlantRoseForm/>);
        expect(toJson(wrapper)).toMatchSnapshot();
    })
})