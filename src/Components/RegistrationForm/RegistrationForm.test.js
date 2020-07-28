import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import toJson from 'enzyme-to-json';
import RegistrationForm from './RegistrationForm';

describe ('RegistrationForm Component', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        
        ReactDOM.render(
            <BrowserRouter>
                <RegistrationForm/>
            </BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div)
    });

    it ('renders the complete RegistrationForm Component', () => {
        const wrapper = shallow(<RegistrationForm/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})