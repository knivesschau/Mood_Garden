import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import toJson from 'enzyme-to-json';
import LoginForm from './LoginForm';

describe ('LoginForm Component', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        
        ReactDOM.render(
            <BrowserRouter>
                <LoginForm/>
            </BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div)
    });

    it ('renders the complete LoginForm Component', () => {
        const wrapper = shallow(<LoginForm/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})