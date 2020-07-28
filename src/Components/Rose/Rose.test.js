import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Rose from './Rose';

describe ('Rose Component', () => {
    const props = {
        color: "Yellow",
        entry_date: new Date(), 
        rose: 'test rose',
        thorn: 'test thorn',
        bud: 'test component'
    }

    it ('renders without crashing', () => {
        const div = document.createElement('div')
        
        ReactDOM.render(
            <BrowserRouter>
                <Rose/>
            </BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div)
    });

    it ('renders the complete Rose Component', () => {
        const wrapper = shallow(<Rose/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });

    it ('renders the complete Rose Component given props', () => {
        const wrapper = shallow(<Rose {...props}/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})