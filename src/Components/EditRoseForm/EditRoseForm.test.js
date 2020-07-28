import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import EditRoseForm from './EditRoseForm';

describe ('EditRoseForm Component', () => {
    const props = {
        color: "Yellow",
        entry_date: new Date(), 
        rose: 'test rose',
        thorn: 'test thorn',
        bud: 'test component'
    }
    
    it ('renders the complete EditRoseForm Component', () => {
        const wrapper = shallow(<EditRoseForm/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it ('renders the correct EditRoseForm Component given props', () => {
        const wrapper = shallow(<EditRoseForm {...props}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})