import React from 'react';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import RoseInfo from './RoseInfo';

describe ('RoseInfo Component', () => {
    const props = {
        color: "Yellow",
        entry_date: new Date(), 
    }
    
    it ('renders the complete RoseInfo Component', () => {
        const wrapper = shallow(<RoseInfo/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it ('renders the correct Rose Component given props', () => {
        const wrapper = shallow(<RoseInfo {...props}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})