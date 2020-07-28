import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import {BrowserRouter} from 'react-router-dom';
import toJson from 'enzyme-to-json';
import LandingPage from './LandingPage';

describe ('LandingPage Component', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div')
        
        ReactDOM.render(
            <BrowserRouter>
                <LandingPage/>
            </BrowserRouter>, div)

        ReactDOM.unmountComponentAtNode(div)
    });

    it ('renders the Complete LandingPage Component and all nested Components', () => {
        const wrapper = shallow(<LandingPage/>)
        expect(toJson(wrapper)).toMatchSnapshot()
    });
})